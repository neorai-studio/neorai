export const INTRO_TEXT_CONTENT = {
	headline: "Premium Moto Apparel",
	subtitle: (
		<div>
			PROTECTION MEETS THE <span className="highlight">STREET.</span>
		</div>
	),
	paragraph:
		"Built for riders who refuse to choose between safety and style. The last hoodie you'll ever need.",
	explore: "Explore the Hoodie",
	story: "Our Story",
};

export interface StatItem {
	value: string;
	info: string;
}

export const startItems: StatItem[] = [
	{ value: "CE1", info: "Certified Armor" },
	{ value: "600D", info: "Abrasion Fabric" },
	{ value: "5", info: "Armor Zones" },
	{ value: "40T", info: "Removable protection" },
];

export const OUR_STORY_TEXT_CONTENT = {
	headline: "01 — Our Story",
	subtitle: (
		<div>
			BORN FOR THE <span className="outline">STREETS.</span>
		</div>
	),
	paragraphPart1:
		"We were tired of the compromise. For years, riders had to choose between looking like a racer in bulky leather, or risking it all in a regular t-shirt. We believed there had to be a better way.",
	paragraphPart2:
		"NEORAI was forged by riders, for riders. We combined military-grade protective materials with the kind of streetwear you'd actually want to live in. The result is a hoodie that moves with you - from the garage to the highway to the bar.",
	paragraphPart3:
		"No compromises. No half-measures. Just protection that doesn't ask you to sacrifice who you are.",
};
