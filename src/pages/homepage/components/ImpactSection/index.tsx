import { useCallback, useState, type Ref } from "react";
import useInView from "../../../../utils/useInVeiwHook";
import ImpactCanvasAnimation from "./ImpactCanvasAnimation";
import {
	Caption,
	CaptionRail,
	Fineprint,
	ImpactContentWrapper,
	ImpactEyebrow,
	ImpactSectionWrapper,
	ImpactTitle,
	ImpactVignette,
} from "./styles";

const CAPTIONS = [
	"Force in.",
	"Dispersed across the weave.",
	"Absorbed at the panel.",
	"You keep riding.",
];

const ImpactSection = () => {
	const [ref, inView] = useInView(0.15);
	const [captionIndex, setCaptionIndex] = useState(0);

	const handleWaveSpawn = useCallback(() => {
		setCaptionIndex((prev) => prev + 1);
	}, []);

	return (
		<ImpactSectionWrapper ref={ref as Ref<HTMLElement>}>
			<ImpactCanvasAnimation inView={!!inView} onWaveSpawn={handleWaveSpawn} />
			<ImpactVignette />

			<ImpactContentWrapper $inView={!!inView}>
				<ImpactEyebrow>Engineered response</ImpactEyebrow>
				<ImpactTitle>
					Every impact meets
					<br />
					<em>resistance.</em>
				</ImpactTitle>

				<CaptionRail>
					{CAPTIONS.map((text, i) => {
						const activeIndex =
							captionIndex > 0 ? (captionIndex - 1) % CAPTIONS.length : 0;
						const isActive = activeIndex === i;
						return (
							<Caption key={text} $active={isActive}>
								{text}
							</Caption>
						);
					})}
				</CaptionRail>

				<Fineprint>
					A stylized simulation of how impact-reactive panels spread force
					across the surface — not a literal readout of lab test data.
				</Fineprint>
			</ImpactContentWrapper>
		</ImpactSectionWrapper>
	);
};

export default ImpactSection;
