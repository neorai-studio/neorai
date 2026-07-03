import {
	ArmorSection,
	ArmorImageWrap,
	ArmorInfoSide,
	MoleculeIconWrap,
	ArmorValue,
	ArmorDesc,
	TooltipLine,
} from "./styles";
import scatteredArmor from "../../../../assets/images/scattered-armor.png";

/** Molecular structure SVG icon */
const MoleculeIcon = () => (
	<svg
		width="48"
		height="48"
		viewBox="0 0 48 48"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
	>
		{/* Central node */}
		<circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.3" />
		{/* Outer nodes */}
		<circle cx="12" cy="12" r="3" />
		<circle cx="36" cy="12" r="3" />
		<circle cx="12" cy="36" r="3" />
		<circle cx="36" cy="36" r="3" />
		<circle cx="24" cy="6" r="2.5" />
		<circle cx="24" cy="42" r="2.5" />
		{/* Bonds */}
		<line x1="14" y1="14" x2="22" y2="22" />
		<line x1="34" y1="14" x2="26" y2="22" />
		<line x1="14" y1="34" x2="22" y2="26" />
		<line x1="34" y1="34" x2="26" y2="26" />
		<line x1="24" y1="8.5" x2="24" y2="20" />
		<line x1="24" y1="28" x2="24" y2="39.5" />
	</svg>
);

/**
 * Section B — Loose Armor Display
 * Dark background with scattered armor pieces and a "40T" tooltip
 * describing the polymer absorption technology.
 */
const LooseArmor = () => {
	return (
		<ArmorSection>
			<ArmorImageWrap>
				<img
					src={scatteredArmor}
					alt="CE1 removable armor protection pieces"
				/>
			</ArmorImageWrap>

			<ArmorInfoSide>
				<TooltipLine />

				<MoleculeIconWrap>
					<MoleculeIcon />
				</MoleculeIconWrap>

				<ArmorValue>40T</ArmorValue>

				<ArmorDesc>
					40T is a proprietary absorption index: 40 Tonnes of
					instantaneous force distributed and neutralized by
					honeycomb polymer structure. Designed to compress on
					impact, absorbing and redirecting kinetic energy away
					from the rider's body.
				</ArmorDesc>
			</ArmorInfoSide>
		</ArmorSection>
	);
};

export default LooseArmor;
