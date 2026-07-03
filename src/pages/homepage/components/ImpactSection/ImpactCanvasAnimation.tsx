import React, { useEffect, useRef } from "react";
import { StyledCanvas } from "./styles";

interface ImpactCanvasAnimationProps {
	inView: boolean;
	onWaveSpawn: () => void;
}

const ImpactCanvasAnimation: React.FC<ImpactCanvasAnimationProps> = ({
	inView,
	onWaveSpawn,
}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const rafIdRef = useRef<number | null>(null);
	// We need to store onWaveSpawn in a ref to avoid recreating the useEffect on every change
	const onWaveSpawnRef = useRef(onWaveSpawn);

	useEffect(() => {
		onWaveSpawnRef.current = onWaveSpawn;
	}, [onWaveSpawn]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const parent = canvas.parentElement;
		if (!parent) return;

		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const dpr = 1; // Force 1x resolution to massively save pixel fill-rate on 4K/Retina displays

		let W = 0;
		let H = 0;
		let dots: { bx: number; by: number }[] = [];
		let streaks: {
			y: number;
			x: number;
			len: number;
			speed: number;
			opacity: number;
		}[] = [];
		let waves: {
			ox: number;
			oy: number;
			born: number;
			speed: number;
			maxRadius: number;
		}[] = [];
		let lastWaveTime = 0;
		const waveInterval = 2400;
		let originPoints: { x: number; y: number }[] = [];
		let originIndex = 0;
		let running = false;
		let startTime: number | null = null;

		// Pre-allocated arrays for zero-allocation rendering
		const glowX = new Float32Array(2000);
		const glowY = new Float32Array(2000);
		const glowSize = new Float32Array(2000);
		const glowVal = new Float32Array(2000);

		function buildGrid() {
			dots = [];
			if (W === 0 || H === 0) return;
			const isMobile = W < 640;
			const cols = isMobile ? 26 : 46;
			const spacing = W / cols;
			const rows = Math.ceil(H / spacing);
			const offsetY = (H - rows * spacing) / 2;
			for (let r = 0; r <= rows; r++) {
				for (let c = 0; c <= cols; c++) {
					dots.push({
						bx: c * spacing,
						by: offsetY + r * spacing,
					});
				}
			}
		}

		function buildStreaks() {
			streaks = [];
			const isMobile = W < 640;
			const count = isMobile ? 5 : 9;
			for (let i = 0; i < count; i++) {
				streaks.push({
					y: Math.random() * H,
					x: Math.random() * W * -1,
					len: 60 + Math.random() * 160,
					speed: 40 + Math.random() * 90,
					opacity: 0.04 + Math.random() * 0.09,
				});
			}
		}

		function buildOrigins() {
			originPoints = [
				{ x: W * 0.28, y: H * 0.42 },
				{ x: W * 0.5, y: H * 0.55 },
				{ x: W * 0.72, y: H * 0.4 },
				{ x: W * 0.5, y: H * 0.3 },
			];
		}

		function resize() {
			if (!parent || !canvas || !ctx) return;
			const rect = parent.getBoundingClientRect();
			W = rect.width;
			H = rect.height;
			canvas.width = W * dpr;
			canvas.height = H * dpr;
			canvas.style.width = W + "px";
			canvas.style.height = H + "px";
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			buildGrid();
			buildStreaks();
			buildOrigins();
		}

		function spawnWave(t: number) {
			const origin = originPoints[originIndex % originPoints.length];
			originIndex++;
			waves.push({
				ox: origin.x,
				oy: origin.y,
				born: t,
				speed: 0.22,
				maxRadius: Math.max(W, H) * 0.75,
			});
			onWaveSpawnRef.current();
		}

		function frame(ts: number) {
			if (!ctx) return;
			if (!startTime) startTime = ts;
			const t = ts - startTime;

			if (t - lastWaveTime > waveInterval) {
				lastWaveTime = t;
				spawnWave(t);
			}

			ctx.clearRect(0, 0, W, H);

			// speed streaks
			ctx.save();
			for (let i = 0; i < streaks.length; i++) {
				const s = streaks[i];
				s.x += s.speed * (16 / 1000) * 16;
				if (s.x > W + s.len) {
					s.x = -s.len;
					s.y = Math.random() * H;
				}
				const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.len, s.y);
				grad.addColorStop(0, "rgba(232,163,61,0)");
				grad.addColorStop(0.5, `rgba(232,163,61,${s.opacity})`);
				grad.addColorStop(1, "rgba(232,163,61,0)");
				ctx.strokeStyle = grad;
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(s.x, s.y);
				ctx.lineTo(s.x + s.len, s.y);
				ctx.stroke();
			}
			ctx.restore();

			// active waves: filter old
			waves = waves.filter((w) => (t - w.born) * w.speed < w.maxRadius + 40);

			// grid dots with displacement
			ctx.beginPath();
			ctx.fillStyle = "rgba(120,112,98,0.14)";
			let glowCount = 0;

			for (let d = 0; d < dots.length; d++) {
				const dot = dots[d];
				let dx = 0;
				let dy = 0;
				let glow = 0;

				for (let w = 0; w < waves.length; w++) {
					const wave = waves[w];
					const age = t - wave.born;
					if (age < 0) continue;
					const radius = age * wave.speed;

					const vx = dot.bx - wave.ox;
					const vy = dot.by - wave.oy;
					const distSq = vx * vx + vy * vy;

					const innerBound = Math.max(0, radius - 80);
					const outerBound = radius + 80;
					if (
						distSq < innerBound * innerBound ||
						distSq > outerBound * outerBound
					)
						continue;

					const dist = Math.sqrt(distSq) || 0.001;
					const distToWave = dist - radius;

					const bump = Math.exp(-(distToWave * distToWave) / 1352);
					const fade = Math.max(0, 1 - radius / wave.maxRadius);
					const amp = bump * fade * 7;

					dx += (vx / dist) * amp;
					dy += (vy / dist) * amp;
					glow += bump * fade;
				}

				const x = dot.bx + dx;
				const y = dot.by + dy;
				const size = 1.1 + Math.min(glow, 1) * 2.2;

				if (glow > 0.08) {
					if (glowCount < 2000) {
						glowX[glowCount] = x;
						glowY[glowCount] = y;
						glowSize[glowCount] = size;
						glowVal[glowCount] = glow;
						glowCount++;
					}
				} else {
					ctx.rect(x - size / 2, y - size / 2, size, size);
				}
			}
			ctx.fill();

			for (let i = 0; i < glowCount; i++) {
				const x = glowX[i];
				const y = glowY[i];
				const size = glowSize[i];
				const alpha = 0.14 + Math.min(glowVal[i], 1) * 0.75;
				ctx.fillStyle = `rgba(232,163,61,${Math.min(alpha, 0.95).toFixed(3)})`;
				ctx.fillRect(x - size / 2, y - size / 2, size, size);
			}

			// origin flash
			for (let w2 = 0; w2 < waves.length; w2++) {
				const wv = waves[w2];
				const age2 = t - wv.born;
				const flash = Math.max(0, 1 - age2 / 260);
				if (flash > 0) {
					const rg = ctx.createRadialGradient(
						wv.ox,
						wv.oy,
						0,
						wv.ox,
						wv.oy,
						34,
					);
					rg.addColorStop(0, `rgba(255,179,71,${(0.55 * flash).toFixed(3)})`);
					rg.addColorStop(1, "rgba(255,179,71,0)");
					ctx.fillStyle = rg;
					ctx.beginPath();
					ctx.arc(wv.ox, wv.oy, 34, 0, Math.PI * 2);
					ctx.fill();
				}
			}

			if (running) {
				rafIdRef.current = requestAnimationFrame(frame);
			}
		}

		function start() {
			if (running) return;
			running = true;
			startTime = null;
			lastWaveTime = -waveInterval;
			rafIdRef.current = requestAnimationFrame(frame);
		}

		function stop() {
			running = false;
			if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
		}

		function staticFrame() {
			if (!ctx) return;
			ctx.clearRect(0, 0, W, H);
			for (let d = 0; d < dots.length; d++) {
				ctx.fillStyle = "rgba(120,112,98,0.18)";
				ctx.fillRect(dots[d].bx - 0.6, dots[d].by - 0.6, 1.2, 1.2);
			}
			onWaveSpawnRef.current(); // trigger first caption
		}

		const handleResize = () => {
			resize();
			if (!running && reduceMotion) {
				staticFrame();
			}
		};

		let initialResizeRaf: number;
		const checkInitialSize = () => {
			if (!parent) return;
			const rect = parent.getBoundingClientRect();
			if (rect.width > 0 && rect.height > 0) {
				handleResize();
			} else {
				initialResizeRaf = requestAnimationFrame(checkInitialSize);
			}
		};
		checkInitialSize();

		window.addEventListener("resize", handleResize);

		if (inView) {
			if (!reduceMotion) {
				start();
			} else {
				staticFrame();
			}
		} else {
			stop();
		}

		return () => {
			if (initialResizeRaf) cancelAnimationFrame(initialResizeRaf);
			window.removeEventListener("resize", handleResize);
			stop();
		};
	}, [inView]);

	return <StyledCanvas ref={canvasRef} />;
};

export default ImpactCanvasAnimation;
