import ArmorBackSVG from "../../../assets/armor/back/armor-gray.svg";
import ArmorBackGlowSVG from "../../../assets/armor/back/armor-hover.svg";
import ArmorBackElbowGlowSVG from "../../../assets/armor/back-elbow/forearm-armor-gold.svg";
import ArmorBackElbowSVG from "../../../assets/armor/back-elbow/forearm-armor-gray.svg";
import ArmorBackShoulderGlowSVG from "../../../assets/armor/back-shoulder/shoulder-armor-gold.svg";
import ArmorBackShoulderSVG from "../../../assets/armor/back-shoulder/shoulder-armor-gray.svg";
import ArmorFrontElbowSVG from "../../../assets/armor/front-elbow/front-elbow-gray.svg";
import ArmorFrontElbowGlowSVG from "../../../assets/armor/front-elbow/front-elbow-gold.svg";
import ArmorFrontShoulderSVG from "../../../assets/armor/front-shoulder/front-shoulder-gray.svg";
import ArmorFrontShoulderGlowSVG from "../../../assets/armor/front-shoulder/front-shoulder-gold.svg";

export enum HoverKey {
	BACK_ARMOR = "backArmor",
	BACK_SHOULDER_LEFT = "backShoulderLeft",
	BACK_SHOULDER_RIGHT = "backShoulderRight",
	BACK_ELBOW_LEFT = "backElbowLeft",
	BACK_ELBOW_RIGHT = "backElbowRight",
	FRONT_ELBOW_LEFT = "frontElbowLeft",
	FRONT_ELBOW_RIGHT = "frontElbowRight",
	FRONT_SHOULDER_RIGHT = "frontShoulderRight",
	FRONT_SHOULDER_LEFT = "frontShoulderLeft",
}

export const armorPartConfigs = {
	backArmor: {
		downMd: { width: "15%", height: "28%", top: "49%", left: "22.5%" },
		upMd: { width: "21%", height: "32%", top: "42%", left: "21%" },
	},
	backShoulderLeft: {
		rotate: "-23deg",
		downMd: { width: "8%", height: "8%", top: "45%", left: "18%" },
		upMd: { width: "8%", height: "8%", top: "38%", left: "18%" },
	},
	backShoulderRight: {
		rotate: "23deg",
		downMd: { width: "8%", height: "8%", top: "45%", left: "37%" },
		upMd: { width: "8%", height: "8%", top: "38%", left: "37%" },
	},
	backElbowLeft: {
		rotate: "5deg",
		downMd: { width: "7%", height: "17%", top: "59%", left: "13%" },
		upMd: { width: "7%", height: "17%", top: "56%", left: "13%" },
	},
	backElbowRight: {
		rotate: "5deg",
		flipX: true,
		downMd: { width: "7%", height: "17%", top: "59%", left: "42.5%" },
		upMd: { width: "7%", height: "17%", top: "56%", left: "43%" },
	},
	frontElbowRight: {
		rotate: "5deg",
		downMd: { width: "7%", height: "17%", top: "59%", left: "42.5%" },
		upMd: { width: "7%", height: "17%", top: "56%", left: "50%" },
	},
	frontElbowLeft: {
		rotate: "5deg",
		flipX: true,
		downMd: { width: "7%", height: "17%", top: "59%", left: "42.5%" },
		upMd: { width: "7%", height: "17%", top: "56%", left: "81%" },
	},
	frontShoulderRight: {
		rotate: "23deg",
		flipX: true,
		downMd: { width: "8%", height: "8%", top: "59%", left: "37.5%" },
		upMd: { width: "8%", height: "8%", top: "38%", left: "55%" },
	},
	frontShoulderLeft: {
		rotate: "25deg",
		downMd: { width: "8%", height: "8%", top: "59%", left: "37.5%" },
		upMd: { width: "8%", height: "8%", top: "38.3%", left: "74.5%" },
	},
} as const;

export const armorParts = [
	{
		config: armorPartConfigs.backArmor,
		hoverKey: HoverKey.BACK_ARMOR,
		src: ArmorBackSVG,
		glowSrc: ArmorBackGlowSVG,
	},
	{
		config: armorPartConfigs.backShoulderLeft,
		hoverKey: HoverKey.BACK_SHOULDER_LEFT,
		src: ArmorBackShoulderSVG,
		glowSrc: ArmorBackShoulderGlowSVG,
	},
	{
		config: armorPartConfigs.backShoulderRight,
		hoverKey: HoverKey.BACK_SHOULDER_RIGHT,
		src: ArmorBackShoulderSVG,
		glowSrc: ArmorBackShoulderGlowSVG,
	},
	{
		config: armorPartConfigs.backElbowLeft,
		hoverKey: HoverKey.BACK_ELBOW_LEFT,
		src: ArmorBackElbowSVG,
		glowSrc: ArmorBackElbowGlowSVG,
	},
	{
		config: armorPartConfigs.backElbowRight,
		hoverKey: HoverKey.BACK_ELBOW_RIGHT,
		src: ArmorBackElbowSVG,
		glowSrc: ArmorBackElbowGlowSVG,
	},
	{
		config: armorPartConfigs.frontElbowRight,
		hoverKey: HoverKey.FRONT_ELBOW_RIGHT,
		src: ArmorFrontElbowSVG,
		glowSrc: ArmorFrontElbowGlowSVG,
	},
	{
		config: armorPartConfigs.frontElbowLeft,
		hoverKey: HoverKey.FRONT_ELBOW_LEFT,
		src: ArmorFrontElbowSVG,
		glowSrc: ArmorFrontElbowGlowSVG,
	},
	{
		config: armorPartConfigs.frontShoulderLeft,
		hoverKey: HoverKey.FRONT_SHOULDER_LEFT,
		src: ArmorFrontShoulderSVG,
		glowSrc: ArmorFrontShoulderGlowSVG,
	},
	{
		config: armorPartConfigs.frontShoulderRight,
		hoverKey: HoverKey.FRONT_SHOULDER_RIGHT,
		src: ArmorFrontShoulderSVG,
		glowSrc: ArmorFrontShoulderGlowSVG,
	},
] as const;
