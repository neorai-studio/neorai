import bgImage from "../../../../assets/images/bg-image.png";
import {
	HeroHeadline,
	HeroParagraph,
	HeroSubtitle,
} from "../../../../components/HeroText";
import Section from "../../../../components/Section";
import { OperaBtm, OutlineBtn } from "../../../../utils/ButtonsFactory";
import { INTRO_TEXT_CONTENT } from "../../models/contentText";
import { BtmWrap, TextWrap } from "./styles";

const IntroSection = () => {
	return (
		<Section bgInfo={bgImage}>
			<TextWrap>
				<HeroHeadline headline={INTRO_TEXT_CONTENT.headline} />
				<HeroSubtitle subtitle={INTRO_TEXT_CONTENT.subtitle} />
				<HeroParagraph
					paragraph={INTRO_TEXT_CONTENT.paragraph}
					style={{ width: "60%" }}
				/>
				<BtmWrap>
					<OperaBtm>{INTRO_TEXT_CONTENT.explore}</OperaBtm>
					<OutlineBtn>{INTRO_TEXT_CONTENT.story}</OutlineBtn>
				</BtmWrap>
			</TextWrap>
		</Section>
	);
};

export default IntroSection;
