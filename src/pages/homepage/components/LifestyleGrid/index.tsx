import { GridSection, PhotoGrid, GridItem } from "./styles";
import photo1 from "../../../../assets/images/grid-photo-1.jpg";
import photo2 from "../../../../assets/images/grid-photo-2.png";
import photo3 from "../../../../assets/images/grid-photo-3.jpg";
import photo4 from "../../../../assets/images/grid-photo-4.jpg";
import photo5 from "../../../../assets/images/grid-photo-5.png";

const lifestylePhotos = [
	{
		src: photo1,
		alt: "Back of hoodie with demon graphic",
	},
	{
		src: photo2,
		alt: "Back angle of hoodie",
	},
	{
		src: photo3,
		alt: "Front angle of hoodie",
	},
	{
		src: photo4,
		alt: "Front angle close up",
	},
	{
		src: photo5,
		alt: "Close-up of demon graphic on hoodie",
	},
];

const LifestyleGrid = () => {
	return (
		<GridSection>
			<PhotoGrid>
				{lifestylePhotos.map((photo) => (
					<GridItem key={photo.alt}>
						<img src={photo.src} alt={photo.alt} loading="lazy" />
					</GridItem>
				))}
			</PhotoGrid>
		</GridSection>
	);
};

export default LifestyleGrid;
