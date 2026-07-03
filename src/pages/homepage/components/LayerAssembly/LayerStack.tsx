import { LAYERS } from "./layerData";
import {
	LayerStackWrapper,
	LayerCard,
	LayerNum,
	LayerInfo,
	LayerInfoTitle,
	LayerInfoDesc,
} from "./styles";

interface LayerStackProps {
	activeIndex: number;
	exploded: boolean;
	revealed: boolean;
	onCardHover: (index: number) => void;
}

const LayerStack = ({
	activeIndex,
	exploded,
	revealed,
	onCardHover,
}: LayerStackProps) => {
	return (
		<LayerStackWrapper $exploded={exploded}>
			{LAYERS.map((layer) => (
				<LayerCard
					key={layer.index}
					$revealed={revealed}
					$highlight={activeIndex === layer.index}
					$layerIndex={layer.index}
					$exploded={exploded}
					onMouseEnter={() => onCardHover(layer.index)}
				>
					<LayerNum $highlight={activeIndex === layer.index}>
						{layer.label}
					</LayerNum>
					<LayerInfo>
						<LayerInfoTitle>{layer.title}</LayerInfoTitle>
						<LayerInfoDesc>{layer.cardDescription}</LayerInfoDesc>
					</LayerInfo>
				</LayerCard>
			))}
		</LayerStackWrapper>
	);
};

export default LayerStack;
