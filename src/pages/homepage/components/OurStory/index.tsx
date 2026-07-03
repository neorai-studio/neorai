import {
	HeroHeadline,
	HeroParagraph,
	HeroSubtitle,
} from "../../../../components/HeroText";
import RoadLines from "../../../../components/RainAnimation";
import Section from "../../../../components/Section";
import { BGColor } from "../../../../components/Section/styles";
import useInView from "../../../../utils/useInVeiwHook";
import { OUR_STORY_TEXT_CONTENT as TEXT_CONTENT } from "../../models/contentText";
import { HeaderWrap, TextWrap } from "./styles";
import RoadSVG from "../../../../assets/road.svg";

const OurStory = () => {
	const [ref, inView] = useInView(0.2);
	const { headline, subtitle, paragraphPart1, paragraphPart2, paragraphPart3 } =
		TEXT_CONTENT;

	return (
		<Section ref={ref} bgInfo={BGColor.DEFAULT} pt="3rem">
			<HeaderWrap $inView={!!inView}>
				<HeroHeadline headline={headline} />
			</HeaderWrap>
			<TextWrap $inView={!!inView}>
				<HeroSubtitle subtitle={subtitle} style={{ width: "55%" }} />

				<HeroParagraph paragraph={paragraphPart1} />
				<HeroParagraph paragraph={paragraphPart2} />
				<HeroParagraph paragraph={paragraphPart3} />
			</TextWrap>
			<div style={{ width: "100%", position: "absolute", bottom: 0, left: 0 }}>
				<img src={RoadSVG} alt="road" width="100%" height={60} />
			</div>
			<RoadLines />
		</Section>
	);
};

export default OurStory;
