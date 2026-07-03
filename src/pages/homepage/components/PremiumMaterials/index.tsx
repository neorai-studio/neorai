import {
	PremiumSection,
	FabricOverlay,
	ContentRow,
	ViewportCircle,
	PointerLine,
	CalloutBox,
	CalloutLabel,
	CalloutHeadline,
	SectionLabel,
} from "./styles";
import fabricTear from "../../../../assets/images/fabric-tear.jpg";

/**
 * Section A — Premium Materials
 * Full-width dark fabric texture with a circular "tear" viewport,
 * pointer line, and descriptive callout.
 */
const PremiumMaterials = () => {
	return (
		<PremiumSection>
			<FabricOverlay />

			<ContentRow>
				<ViewportCircle>
					<img
						src={fabricTear}
						alt="Abrasion test on 600D Cordura fabric"
					/>
				</ViewportCircle>

				<PointerLine />

				<CalloutBox>
					<CalloutLabel>Abrasion Test</CalloutLabel>
					<CalloutHeadline>
						PREMIUM 600D ABRASION-RESISTANT FABRIC.{" "}
						<strong>BUILT TO ENDURE.</strong>
					</CalloutHeadline>
				</CalloutBox>
			</ContentRow>

			<SectionLabel>Premium Materials</SectionLabel>
		</PremiumSection>
	);
};

export default PremiumMaterials;
