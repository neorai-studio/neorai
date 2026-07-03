import { useCallback, useEffect, useState, type Ref } from "react";
import useInView from "../../../../utils/useInVeiwHook";
import LayerNav from "./LayerNav";
import StackStage from "./StackStage";
import { LAYERS } from "./layerData";
import {
	LayersSectionRoot,
	BgGlow,
	ContentGrid,
	CopyWrapper,
	Eyebrow,
	Title,
	Subtitle,
	HintText,
} from "./styles";

const LayerAssembly = () => {
	const [ref, inView] = useInView(0.35);
	const [activeIndex, setActiveIndex] = useState(0);
	const [exploded, setExploded] = useState(false);
	const [revealed, setRevealed] = useState(false);

	useEffect(() => {
		if (!inView || revealed) return;

		const timers = LAYERS.map((_, i) =>
			setTimeout(
				() => {
					if (i === LAYERS.length - 1) {
						setRevealed(true);
					}
				},
				150 + i * 140,
			),
		);

		// Reveal immediately with a small base delay so the stagger effect
		// is handled by CSS transition-delay or the setTimeout cascade.
		// We set revealed after the last card's timer fires.
		setRevealed(true);

		return () => {
			timers.forEach(clearTimeout);
		};
	}, [inView, revealed]);

	const handleStageEnter = useCallback(() => {
		setExploded(true);
	}, []);

	const handleStageLeave = useCallback(() => {
		setExploded(false);
		setActiveIndex(0);
	}, []);

	const handleStageClick = useCallback(() => {
		setExploded((prev) => !prev);
	}, []);

	const handleNavHover = useCallback((index: number) => {
		setActiveIndex(index);
	}, []);

	const handleExplode = useCallback(() => {
		setExploded(true);
	}, []);

	const handleCardHover = useCallback((index: number) => {
		setActiveIndex(index);
	}, []);

	return (
		<LayersSectionRoot ref={ref as Ref<HTMLElement>}>
			<BgGlow />

			<ContentGrid>
				<CopyWrapper $inView={!!inView}>
					<Eyebrow>Under the shell</Eyebrow>
					<Title>
						Four layers.
						<br />
						One job: keep you <em>riding.</em>
					</Title>
					<Subtitle>
						It looks like a hoodie because it has to. Underneath, it&apos;s
						built like gear. Hover the stack - or tap a layer - to pull it
						apart.
					</Subtitle>

					<LayerNav
						activeIndex={activeIndex}
						onHover={handleNavHover}
						onExplode={handleExplode}
					/>

					<HintText>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path d="M12 2v20M2 12h20" />
						</svg>
						Hover or tap the stack to explode the view
					</HintText>
				</CopyWrapper>

				<StackStage
					activeIndex={activeIndex}
					exploded={exploded}
					revealed={revealed}
					onStageEnter={handleStageEnter}
					onStageLeave={handleStageLeave}
					onCardHover={handleCardHover}
					onStageClick={handleStageClick}
				/>
			</ContentGrid>
		</LayersSectionRoot>
	);
};

export default LayerAssembly;
