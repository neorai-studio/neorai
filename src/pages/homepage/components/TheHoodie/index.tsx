import { useState } from "react";
import Hoodie from "../../../../components/Hoodie";
import Section from "../../../../components/Section";
import { BGColor } from "../../../../components/Section/styles";
import {
	ArmorPieceId,
	armorInfoMap,
	type ArmorBullet,
	type ArmorHeaderIcon,
} from "../../models/armorInfoData";
import {
	ArmorSectionWrap,
	InfoBox,
	InfoContent,
	InfoHeader,
	InfoIconWrap,
	InfoTitleGroup,
	InfoTitle,
	InfoTitleAccent,
	InfoSubtitle,
	InfoBulletRow,
	BulletIcon,
	BulletText,
	InfoNote,
	NoteIcon,
	DefaultPrompt,
	PromptIcon,
	PromptTitle,
	PromptDesc,
	Sparkle,
} from "./styles";

/* ═══ Inline SVG Icons ═══ */

/** Spine / vertebral column icon — used for back protector */
const SpineIcon = () => (
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.2"
	>
		{/* Vertebrae segments */}
		<rect x="11" y="2" width="10" height="3.5" rx="1.5" />
		<rect x="11.5" y="6.5" width="9" height="3" rx="1.3" />
		<rect x="12" y="10.5" width="8" height="3" rx="1.2" />
		<rect x="11.5" y="14.5" width="9" height="3" rx="1.3" />
		<rect x="11" y="18.5" width="10" height="3.5" rx="1.5" />
		<rect x="10.5" y="23" width="11" height="4" rx="1.6" />
		{/* Spinal cord line */}
		<line x1="16" y1="2" x2="16" y2="27" strokeDasharray="1.5 1" opacity="0.4" />
		{/* Pelvis base */}
		<path d="M9 28.5Q16 31 23 28.5" strokeWidth="1.3" />
	</svg>
);

/** Elbow joint icon — used for elbow guards */
const ElbowIcon = () => (
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.2"
	>
		{/* Upper arm bone (humerus) */}
		<line x1="10" y1="3" x2="14" y2="14" strokeWidth="2.5" strokeLinecap="round" />
		{/* Forearm bone (ulna) */}
		<line x1="14" y1="14" x2="24" y2="28" strokeWidth="2.5" strokeLinecap="round" />
		{/* Joint circle */}
		<circle cx="14" cy="14" r="4.5" fill="currentColor" fillOpacity="0.15" />
		<circle cx="14" cy="14" r="4.5" />
		{/* Joint articulation arcs */}
		<path d="M10 11 Q14 8 18 11" strokeWidth="1" opacity="0.6" />
		<path d="M11 17 Q14 20 17 17" strokeWidth="1" opacity="0.6" />
		{/* Protection shield outline */}
		<path d="M7 10 Q5 14 8 18" strokeDasharray="2 1.5" opacity="0.35" />
	</svg>
);

/** Shoulder cap icon — used for shoulder guards */
const ShoulderIcon = () => (
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.2"
	>
		{/* Shoulder dome / deltoid cap */}
		<path d="M6 20 Q6 6 16 4 Q26 6 26 20" strokeWidth="1.4" />
		{/* Internal structure lines */}
		<path d="M10 18 Q10 10 16 8 Q22 10 22 18" opacity="0.45" />
		<path d="M13 17 Q13 12 16 11 Q19 12 19 17" opacity="0.25" />
		{/* Joint ball */}
		<circle cx="16" cy="22" r="3.5" fill="currentColor" fillOpacity="0.15" />
		<circle cx="16" cy="22" r="3.5" />
		{/* Arm bones extending down */}
		<line x1="16" y1="25.5" x2="16" y2="30" strokeWidth="2" strokeLinecap="round" />
	</svg>
);

/** Map from headerIcon type → React component */
const HeaderIconMap: Record<ArmorHeaderIcon, React.ReactNode> = {
	spine: <SpineIcon />,
	elbow: <ElbowIcon />,
	shoulder: <ShoulderIcon />,
};

/** Small 4-pointed star for decoration */
const StarSvg = ({ size = 12 }: { size?: number }) => (
	<svg width={size} height={size} viewBox="0 0 12 12">
		<path
			d="M6 0L6.9 4.5L12 6L6.9 7.5L6 12L5.1 7.5L0 6L5.1 4.5Z"
			fill="rgba(255,255,255,0.35)"
		/>
	</svg>
);

/** Bullet-point icons keyed by type */
const BulletSvgIcons: Record<ArmorBullet["icon"], React.ReactNode> = {
	polymer: (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
		>
			<circle cx="12" cy="12" r="3" />
			<circle cx="12" cy="4" r="2" />
			<circle cx="12" cy="20" r="2" />
			<circle cx="4" cy="12" r="2" />
			<circle cx="20" cy="12" r="2" />
			<line x1="12" y1="6" x2="12" y2="9" />
			<line x1="12" y1="15" x2="12" y2="18" />
			<line x1="6" y1="12" x2="9" y2="12" />
			<line x1="15" y1="12" x2="18" y2="12" />
		</svg>
	),
	shield: (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
		>
			<path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
			<polyline points="9 12 11 14 15 10" />
		</svg>
	),
	flex: (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
		>
			<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
			<path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" />
		</svg>
	),
};

/** Target / crosshair icon for the default prompt */
const TargetIcon = () => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
	>
		<circle cx="12" cy="12" r="10" />
		<circle cx="12" cy="12" r="6" />
		<circle cx="12" cy="12" r="2" />
		<line x1="12" y1="2" x2="12" y2="6" />
		<line x1="12" y1="18" x2="12" y2="22" />
		<line x1="2" y1="12" x2="6" y2="12" />
		<line x1="18" y1="12" x2="22" y2="12" />
	</svg>
);

/* ═══ Helpers ═══ */

/** Wraps known bold terms in <strong> tags */
const renderBulletText = (text: string, boldTerms?: string[]) => {
	if (!boldTerms?.length) return text;

	const parts: React.ReactNode[] = [];
	let remaining = text;

	for (const term of boldTerms) {
		const idx = remaining.indexOf(term);
		if (idx >= 0) {
			if (idx > 0) parts.push(remaining.slice(0, idx));
			parts.push(<strong key={term}>{term}</strong>);
			remaining = remaining.slice(idx + term.length);
		}
	}
	if (remaining) parts.push(remaining);
	return <>{parts}</>;
};

/* ═══ Component ═══ */

const TheHoodie = () => {
	/** null → no armor selected, show "select an armor" prompt */
	const [activeArmorId, setActiveArmorId] = useState<ArmorPieceId | null>(
		null,
	);

	/** Toggle: clicking the same piece a second time deselects it */
	const handleArmorClick = (pieceId: ArmorPieceId) => {
		setActiveArmorId((prev) => (prev === pieceId ? null : pieceId));
	};

	const activeInfo = activeArmorId ? armorInfoMap[activeArmorId] : null;

	return (
		<Section bgInfo={BGColor.DEFAULT} pt="3rem">
			<ArmorSectionWrap>
				{/* ── Info Box ── */}
				<InfoBox $hasContent={!!activeInfo}>
					{activeInfo ? (
						<InfoContent key={activeInfo.id}>
							<InfoHeader>
								<InfoIconWrap>
									{HeaderIconMap[activeInfo.headerIcon]}
								</InfoIconWrap>
								<InfoTitleGroup>
									<InfoTitle>{activeInfo.title}</InfoTitle>
									<InfoTitleAccent>
										{activeInfo.titleAccent}
									</InfoTitleAccent>
								</InfoTitleGroup>
							</InfoHeader>

							<InfoSubtitle>
								{activeInfo.subtitle}
							</InfoSubtitle>

							{activeInfo.bullets.map((bullet, i) => (
								<InfoBulletRow
									key={`${activeInfo.id}-bullet-${i}`}
								>
									<BulletIcon>
										{BulletSvgIcons[bullet.icon]}
									</BulletIcon>
									<BulletText>
										{renderBulletText(
											bullet.text,
											bullet.boldTerms,
										)}
									</BulletText>
								</InfoBulletRow>
							))}

							<InfoNote>
								<NoteIcon>◆</NoteIcon>
								{activeInfo.note}
							</InfoNote>
						</InfoContent>
					) : (
						<DefaultPrompt>
							<PromptIcon>
								<TargetIcon />
							</PromptIcon>
							<PromptTitle>SELECT AN ARMOR PIECE</PromptTitle>
							<PromptDesc>
								Click on any highlighted armor zone on the
								hoodie to view detailed protection
								specifications.
							</PromptDesc>
						</DefaultPrompt>
					)}
				</InfoBox>

				{/* ── Hoodie with clickable armor hotspots ── */}
				<Hoodie
					onArmorClick={handleArmorClick}
					activeArmorId={activeArmorId}
				/>
			</ArmorSectionWrap>

			{/* ── Decorative sparkles ── */}
			<Sparkle $bottom="15%" $right="8%" $size={14}>
				<StarSvg size={14} />
			</Sparkle>
			<Sparkle $top="25%" $right="3%" $size={10}>
				<StarSvg size={10} />
			</Sparkle>
		</Section>
	);
};

export default TheHoodie;
