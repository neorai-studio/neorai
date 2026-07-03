import { LAYERS } from "./layerData";
import {
	NavList,
	NavItem,
	NavIndex,
	NavTextBlock,
	NavTitle,
	NavDescription,
} from "./styles";

interface LayerNavProps {
	activeIndex: number;
	onHover: (index: number) => void;
	onExplode: () => void;
}

const LayerNav = ({ activeIndex, onHover, onExplode }: LayerNavProps) => {
	return (
		<NavList>
			{LAYERS.map((layer) => (
				<NavItem
					key={layer.index}
					$active={activeIndex === layer.index}
					onMouseEnter={() => {
						onHover(layer.index);
						onExplode();
					}}
					onClick={() => {
						onHover(layer.index);
						onExplode();
					}}
				>
					<NavIndex $active={activeIndex === layer.index}>
						{layer.label}
					</NavIndex>
					<NavTextBlock>
						<NavTitle>{layer.title}</NavTitle>
						<NavDescription>{layer.description}</NavDescription>
					</NavTextBlock>
				</NavItem>
			))}
		</NavList>
	);
};

export default LayerNav;
