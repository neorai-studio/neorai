import { useState } from "react";
import HoodieImage from "../../../../assets/hoodie.png";
import {
	CTASection,
	ProductImageWrap,
	CTAContent,
	CTATitle,
	ColorLabel,
	ColorSwatches,
	ColorSwatch,
	BuyButton,
} from "./styles";

/** Available hoodie color options */
const colorOptions = [
	{ name: "Black", hex: "#1a1a1a" },
	{ name: "Charcoal", hex: "#333333" },
	{ name: "Olive", hex: "#4a5a3a" },
];

/**
 * Section D — Purchase / CTA Area
 * Left: floating hoodie product image.
 * Right: CTA headline, color selector, and "BUY ON ETSY" button.
 * Price is intentionally omitted — users see it on Etsy.
 */
const PurchaseCTA = () => {
	const [selectedColor, setSelectedColor] = useState("Black");

	return (
		<CTASection>
			<ProductImageWrap>
				<img
					src={HoodieImage}
					alt="IRONCLAD tactical motorcycle hoodie with CE1 armor"
				/>
			</ProductImageWrap>

			<CTAContent>
				<CTATitle>CTA</CTATitle>

				<div>
					<ColorLabel>COLOR:</ColorLabel>
					<ColorSwatches>
						{colorOptions.map((color) => (
							<ColorSwatch
								key={color.name}
								$color={color.hex}
								$active={selectedColor === color.name}
								onClick={() =>
									setSelectedColor(color.name)
								}
								aria-label={`Select ${color.name} color`}
							/>
						))}
					</ColorSwatches>
				</div>

				<BuyButton
					href="https://www.etsy.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					BUY ON ETSY
				</BuyButton>
			</CTAContent>
		</CTASection>
	);
};

export default PurchaseCTA;
