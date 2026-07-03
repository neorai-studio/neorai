import { useEffect, useRef } from "react";
import { Cursor, CursorRing } from "./styles";

const CustomCursor = () => {
	const cursorRef = useRef<HTMLDivElement>(null);
	const ringRef = useRef<HTMLDivElement>(null);
	const rafId = useRef<number>(0);
	const mouseX = useRef(0);
	const mouseY = useRef(0);

	useEffect(() => {
		const onMouseMove = (e: MouseEvent) => {
			mouseX.current = e.clientX;
			mouseY.current = e.clientY;

			const target = e.target as HTMLElement;

			// Detect clickable elements, including MUI buttons
			if (
				target.matches("button, a, [role='button'], [onClick]") ||
				target.closest("button, a, [role='button'], [onClick]")
			) {
				document.body.classList.add("cursor-hover");
			} else {
				document.body.classList.remove("cursor-hover");
			}
		};

		const tick = () => {
			const cursor = cursorRef.current;
			const ring = ringRef.current;
			if (cursor) {
				cursor.style.left = `${mouseX.current}px`;
				cursor.style.top = `${mouseY.current}px`;
			}
			if (ring) {
				ring.style.left = `${mouseX.current}px`;
				ring.style.top = `${mouseY.current}px`;
			}
			rafId.current = requestAnimationFrame(tick);
		};

		window.addEventListener("mousemove", onMouseMove, { passive: true });
		rafId.current = requestAnimationFrame(tick);

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			cancelAnimationFrame(rafId.current);
		};
	}, []);

	return (
		<>
			<Cursor ref={cursorRef} />
			<CursorRing ref={ringRef} />
		</>
	);
};

export default CustomCursor;
