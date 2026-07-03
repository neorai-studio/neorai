import type { CSSProperties } from "react";
import {
	HeroEyebrow,
	HeroParagraphText,
	HeroSubtitleText,
	SectionHeadline,
} from "./styles";

// Text content types
interface HeroProps {
	style?: CSSProperties;
	inView?: boolean;
}

interface HeroHeadlineProps extends HeroProps {
	headline?: string;
}

interface HeroSubtitleProps extends HeroProps {
	subtitle?: React.ReactNode | string;
}

interface HeroParagraphProps extends HeroProps {
	paragraph: string;
}

// Text components
const HeroHeadline: React.FC<HeroHeadlineProps> = ({ headline, style }) => {
	return (
		<SectionHeadline style={style}>
			<HeroEyebrow />
			{headline}
		</SectionHeadline>
	);
};

const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ subtitle, style }) => {
	return <HeroSubtitleText style={style}>{subtitle}</HeroSubtitleText>;
};

const HeroParagraph: React.FC<HeroParagraphProps> = ({ paragraph, style }) => {
	return <HeroParagraphText style={style}>{paragraph}</HeroParagraphText>;
};

export { HeroHeadline, HeroSubtitle, HeroParagraph };
