import { HoverKey } from "./armorPartsConfig";

/**
 * The 5 distinct armor zones.
 * Multiple visual hotspots (front / back views) map to the same zone.
 */
export enum ArmorPieceId {
	LEFT_SHOULDER = "leftShoulder",
	RIGHT_SHOULDER = "rightShoulder",
	LEFT_ELBOW = "leftElbow",
	RIGHT_ELBOW = "rightElbow",
	BACK_PROTECTOR = "backProtector",
}

/**
 * Maps every visual hotspot HoverKey → logical ArmorPieceId.
 * This is the core of the "9 hotspots → 5 armor pieces" mapping.
 */
export const hoverKeyToArmorPiece: Record<HoverKey, ArmorPieceId> = {
	[HoverKey.FRONT_SHOULDER_LEFT]: ArmorPieceId.LEFT_SHOULDER,
	[HoverKey.BACK_SHOULDER_LEFT]: ArmorPieceId.LEFT_SHOULDER,
	[HoverKey.FRONT_SHOULDER_RIGHT]: ArmorPieceId.RIGHT_SHOULDER,
	[HoverKey.BACK_SHOULDER_RIGHT]: ArmorPieceId.RIGHT_SHOULDER,
	[HoverKey.FRONT_ELBOW_LEFT]: ArmorPieceId.LEFT_ELBOW,
	[HoverKey.BACK_ELBOW_LEFT]: ArmorPieceId.LEFT_ELBOW,
	[HoverKey.FRONT_ELBOW_RIGHT]: ArmorPieceId.RIGHT_ELBOW,
	[HoverKey.BACK_ELBOW_RIGHT]: ArmorPieceId.RIGHT_ELBOW,
	[HoverKey.BACK_ARMOR]: ArmorPieceId.BACK_PROTECTOR,
};

/** Bullet descriptor rendered inside the info-box */
export interface ArmorBullet {
	icon: "polymer" | "shield" | "flex";
	text: string;
	boldTerms?: string[];
}

/** Icon type for the info-box header — each armor zone gets its own icon */
export type ArmorHeaderIcon = "spine" | "elbow" | "shoulder";

/** Full content payload for one armor zone */
export interface ArmorPieceInfo {
	id: ArmorPieceId;
	headerIcon: ArmorHeaderIcon;
	title: string;
	titleAccent: string;
	subtitle: string;
	bullets: ArmorBullet[];
	note: string;
}

/** Content for each armor zone — keyed by ArmorPieceId */
export const armorInfoMap: Record<ArmorPieceId, ArmorPieceInfo> = {
	[ArmorPieceId.BACK_PROTECTOR]: {
		id: ArmorPieceId.BACK_PROTECTOR,
		headerIcon: "spine",
		title: "CE1",
		titleAccent: "BACK PROTECTOR",
		subtitle: "Full spinal column coverage from T1 to L5.",
		bullets: [
			{
				icon: "polymer",
				text: "Multi-zone 3D-molded spine guard covers the full vertebral column — from the upper thoracic (T1) to the lower lumbar (L5). Flexible articulated segments follow the natural curvature of the spine, allowing freedom of movement while maintaining certified CE Level 1 impact protection.",
				boldTerms: ["CE Level 1"],
			},
			{
				icon: "shield",
				text: "Impact-reactive polymer core with a rigid hardshell exterior absorbs and distributes force across the entire back panel. Designed to protect the spinal cord, vertebrae, and surrounding tissue from blunt-force trauma during a slide or direct impact.",
				boldTerms: ["spinal cord"],
			},
		],
		note: "Removable for cleaning.",
	},

	[ArmorPieceId.LEFT_SHOULDER]: {
		id: ArmorPieceId.LEFT_SHOULDER,
		headerIcon: "shoulder",
		title: "CE1",
		titleAccent: "LEFT SHOULDER GUARD",
		subtitle: "Dual-density shoulder impact shield.",
		bullets: [
			{
				icon: "polymer",
				text: "Multi-layer polymer construction with ventilated core design ensures breathability without compromising CE Level 1 impact standards.",
				boldTerms: ["CE Level 1"],
			},
			{
				icon: "flex",
				text: "Ergonomically contoured to follow the natural shoulder curve, providing full range of motion during rides.",
			},
		],
		note: "Removable for cleaning.",
	},

	[ArmorPieceId.RIGHT_SHOULDER]: {
		id: ArmorPieceId.RIGHT_SHOULDER,
		headerIcon: "shoulder",
		title: "CE1",
		titleAccent: "RIGHT SHOULDER GUARD",
		subtitle: "Dual-density shoulder impact shield.",
		bullets: [
			{
				icon: "polymer",
				text: "Multi-layer polymer construction with ventilated core design ensures breathability without compromising CE Level 1 impact standards.",
				boldTerms: ["CE Level 1"],
			},
			{
				icon: "flex",
				text: "Ergonomically contoured to follow the natural shoulder curve, providing full range of motion during rides.",
			},
		],
		note: "Removable for cleaning.",
	},

	[ArmorPieceId.LEFT_ELBOW]: {
		id: ArmorPieceId.LEFT_ELBOW,
		headerIcon: "elbow",
		title: "CE1",
		titleAccent: "LEFT ELBOW GUARD",
		subtitle: "Elbow joint & forearm impact shield.",
		bullets: [
			{
				icon: "polymer",
				text: "Extended coverage guard wrapping the elbow joint and upper forearm. Impact-reactive polymer absorbs and disperses force from direct hits, preventing fractures and abrasion injuries to the ulna and radius bones.",
				boldTerms: ["ulna and radius"],
			},
			{
				icon: "shield",
				text: "Slim-profile design sits flush under the sleeve while meeting full CE Level 1 certification. Protects against road rash, impact fractures, and bursa damage during slides and falls.",
				boldTerms: ["CE Level 1"],
			},
		],
		note: "Removable for cleaning.",
	},

	[ArmorPieceId.RIGHT_ELBOW]: {
		id: ArmorPieceId.RIGHT_ELBOW,
		headerIcon: "elbow",
		title: "CE1",
		titleAccent: "RIGHT ELBOW GUARD",
		subtitle: "Elbow joint & forearm impact shield.",
		bullets: [
			{
				icon: "polymer",
				text: "Extended coverage guard wrapping the elbow joint and upper forearm. Impact-reactive polymer absorbs and disperses force from direct hits, preventing fractures and abrasion injuries to the ulna and radius bones.",
				boldTerms: ["ulna and radius"],
			},
			{
				icon: "shield",
				text: "Slim-profile design sits flush under the sleeve while meeting full CE Level 1 certification. Protects against road rash, impact fractures, and bursa damage during slides and falls.",
				boldTerms: ["CE Level 1"],
			},
		],
		note: "Removable for cleaning.",
	},
};
