import { forwardRef } from "react";
import { MainLayout } from "./styles";

interface SectionProps {
	children: React.ReactNode;
	height?: string;
	pt?: string;
	bgInfo?: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
	({ children, height, pt, bgInfo }, ref) => {
		return (
			<MainLayout ref={ref} $height={height} $pt={pt} $bgInfo={bgInfo}>
				{children}
			</MainLayout>
		);
	},
);

Section.displayName = "Section";

export default Section;
