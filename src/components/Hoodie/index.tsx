import { useState } from "react";
import HoodieImage from "../../assets/hoodie.png";
import {
	armorParts,
	HoverKey,
} from "../../pages/homepage/models/armorPartsConfig";
import {
	hoverKeyToArmorPiece,
	type ArmorPieceId,
} from "../../pages/homepage/models/armorInfoData";
import { ArmorPart, Img, ImgWrap } from "./styles";

interface HoodieProps {
	/** Called when an armor hotspot is clicked */
	onArmorClick?: (armorPieceId: ArmorPieceId) => void;
	/** The currently selected armor piece (shown in gold) */
	activeArmorId?: ArmorPieceId | null;
}

const Hoodie: React.FC<HoodieProps> = ({
	onArmorClick,
	activeArmorId = null,
}) => {
	const [hoveredKey, setHoveredKey] = useState<HoverKey | null>(null);

	/**
	 * A hotspot shows its gold/glow SVG when:
	 *  1. It is directly hovered, OR
	 *  2. It belongs to the currently-selected ArmorPieceId
	 *     (e.g. selecting "Left Shoulder" glows both front & back shoulder-left).
	 */
	const isGlowing = (hoverKey: HoverKey): boolean => {
		if (hoveredKey === hoverKey) return true;
		if (activeArmorId && hoverKeyToArmorPiece[hoverKey] === activeArmorId)
			return true;
		return false;
	};

	/** Propagate click to parent via the mapped ArmorPieceId */
	const handleClick = (hoverKey: HoverKey) => {
		onArmorClick?.(hoverKeyToArmorPiece[hoverKey]);
	};

	return (
		<ImgWrap>
			{armorParts.map(({ config, hoverKey, src, glowSrc }) => (
				<ArmorPart
					key={hoverKey}
					{...config}
					src={isGlowing(hoverKey) ? glowSrc : src}
					onMouseEnter={() => setHoveredKey(hoverKey)}
					onMouseLeave={() => setHoveredKey(null)}
					onClick={() => handleClick(hoverKey)}
					alt={hoverKey}
				/>
			))}
			<Img src={HoodieImage} alt="hoodie" />
		</ImgWrap>
	);
};

export default Hoodie;
