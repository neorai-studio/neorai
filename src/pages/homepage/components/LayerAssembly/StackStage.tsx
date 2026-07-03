import LayerStack from "./LayerStack";
import { StackStageWrapper, StackRing, Particle } from "./styles";

interface StackStageProps {
	activeIndex: number;
	exploded: boolean;
	revealed: boolean;
	onStageEnter: () => void;
	onStageLeave: () => void;
	onCardHover: (index: number) => void;
	onStageClick: () => void;
}

const PARTICLES = [
	{ left: "30%", duration: "7s", delay: "0s" },
	{ left: "55%", duration: "9s", delay: "2s" },
	{ left: "70%", duration: "6s", delay: "4s" },
	{ left: "42%", duration: "8s", delay: "1s" },
];

const StackStage = ({
	activeIndex,
	exploded,
	revealed,
	onStageEnter,
	onStageLeave,
	onCardHover,
	onStageClick,
}: StackStageProps) => {
	return (
		<StackStageWrapper
			onMouseEnter={onStageEnter}
			onMouseLeave={onStageLeave}
			onClick={onStageClick}
		>
			<StackRing />
			<StackRing $variant="secondary" />

			{PARTICLES.map((p) => (
				<Particle
					key={p.left}
					$left={p.left}
					$duration={p.duration}
					$delay={p.delay}
				/>
			))}

			<LayerStack
				activeIndex={activeIndex}
				exploded={exploded}
				revealed={revealed}
				onCardHover={onCardHover}
			/>
		</StackStageWrapper>
	);
};

export default StackStage;
