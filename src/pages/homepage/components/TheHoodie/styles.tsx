import { keyframes, styled } from "@mui/material";

/* ═══════════════════════════════════════════
   Animations
   ═══════════════════════════════════════════ */

const glowPulse = keyframes`
	0%, 100% {
		box-shadow: 0 0 15px rgba(232, 160, 32, 0.15),
					inset 0 0 15px rgba(232, 160, 32, 0.03);
	}
	50% {
		box-shadow: 0 0 30px rgba(232, 160, 32, 0.3),
					inset 0 0 20px rgba(232, 160, 32, 0.06);
	}
`;

const fadeSlideIn = keyframes`
	from { opacity: 0; transform: translateY(12px); }
	to   { opacity: 1; transform: translateY(0); }
`;

/* ═══════════════════════════════════════════
   Section wrapper (InfoBox + Hoodie side by side)
   ═══════════════════════════════════════════ */

export const ArmorSectionWrap = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	width: "100%",
	gap: "1rem",
	padding: "2rem 1rem",

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		gap: "2rem",
		padding: "1rem 0",
	},
}));

/* ═══════════════════════════════════════════
   Info Box — glowing gold border container
   ═══════════════════════════════════════════ */

export const InfoBox = styled("div")<{ $hasContent: boolean }>(
	({ theme, $hasContent }) => ({
		width: "30%",
		minHeight: "55vh",
		background:
			"linear-gradient(145deg, rgba(232,160,32,0.08) 0%, rgba(232,160,32,0.02) 100%)",
		border: "1.5px solid rgba(232,160,32,0.45)",
		padding: "2rem 1.8rem",
		display: "flex",
		flexDirection: "column",
		gap: "1.2rem",
		position: "relative",
		overflow: "hidden",
		animation: $hasContent
			? `${glowPulse} 4s ease-in-out infinite`
			: "none",

		/* Subtle radial glow in the top-left corner */
		"&::before": {
			content: '""',
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			background:
				"radial-gradient(ellipse at 10% 10%, rgba(232,160,32,0.06) 0%, transparent 60%)",
			pointerEvents: "none",
		},

		[theme.breakpoints.down("md")]: {
			width: "92%",
			minHeight: "auto",
		},
	}),
);

/* ─── Animated inner wrapper — re-mounts via `key` for transitions ─── */

export const InfoContent = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: "1.2rem",
	flex: 1,
	animation: `${fadeSlideIn} 0.4s ease forwards`,
});

/* ═══════════════════════════════════════════
   Default "Select an armor" prompt
   ═══════════════════════════════════════════ */

export const DefaultPrompt = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	flex: 1,
	gap: "1rem",
	padding: "2rem 1rem",
});

export const PromptIcon = styled("div")({
	width: 64,
	height: 64,
	borderRadius: "50%",
	border: "1.5px solid rgba(232, 160, 32, 0.35)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "#e7a021",
	marginBottom: "0.5rem",
});

export const PromptTitle = styled("h3")({
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "1.3rem",
	letterSpacing: "3px",
	color: "rgba(255,255,255,0.8)",
	margin: 0,
});

export const PromptDesc = styled("p")({
	fontFamily: "'Inter', 'Helvetica', sans-serif",
	fontSize: "0.78rem",
	lineHeight: 1.65,
	color: "rgba(255,255,255,0.4)",
	margin: 0,
	maxWidth: 260,
});

/* ═══════════════════════════════════════════
   Header row (icon + title block)
   ═══════════════════════════════════════════ */

export const InfoHeader = styled("div")({
	display: "flex",
	alignItems: "center",
	gap: "0.9rem",
});

export const InfoIconWrap = styled("div")({
	width: 42,
	height: 42,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	color: "#e7a021",
});

export const InfoTitleGroup = styled("div")({
	display: "flex",
	alignItems: "baseline",
	gap: "0.5rem",
	flexWrap: "wrap",
});

export const InfoTitle = styled("span")({
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "2rem",
	fontWeight: 700,
	color: "#e7a021",
	letterSpacing: "2px",
	lineHeight: 1,
});

export const InfoTitleAccent = styled("span")({
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "1.3rem",
	color: "rgba(255,255,255,0.9)",
	letterSpacing: "2px",
	lineHeight: 1,
});

/* ═══════════════════════════════════════════
   Subtitle
   ═══════════════════════════════════════════ */

export const InfoSubtitle = styled("p")({
	fontFamily: "'Inter', 'Helvetica', sans-serif",
	fontSize: "1.05rem",
	fontStyle: "italic",
	color: "rgba(255,255,255,0.85)",
	margin: 0,
	lineHeight: 1.5,
});

/* ═══════════════════════════════════════════
   Bullet rows
   ═══════════════════════════════════════════ */

export const InfoBulletRow = styled("div")({
	display: "flex",
	gap: "0.7rem",
	alignItems: "flex-start",
});

export const BulletIcon = styled("div")({
	width: 28,
	height: 28,
	minWidth: 28,
	borderRadius: "50%",
	border: "1px solid rgba(232,160,32,0.3)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginTop: 2,
	color: "#e7a021",
	fontSize: "0.7rem",
});

export const BulletText = styled("p")({
	fontFamily: "'Inter', 'Helvetica', sans-serif",
	fontSize: "0.78rem",
	color: "rgba(255,255,255,0.6)",
	margin: 0,
	lineHeight: 1.65,

	"& strong": {
		color: "rgba(255,255,255,0.9)",
		fontWeight: 600,
	},
});

/* ═══════════════════════════════════════════
   Note (bottom of box)
   ═══════════════════════════════════════════ */

export const InfoNote = styled("div")({
	display: "flex",
	alignItems: "center",
	gap: "0.6rem",
	marginTop: "auto",
	paddingTop: "0.8rem",
	borderTop: "1px solid rgba(232,160,32,0.12)",
	color: "rgba(255,255,255,0.55)",
	fontFamily: "'Inter', 'Helvetica', sans-serif",
	fontSize: "0.8rem",
	fontStyle: "italic",
});

export const NoteIcon = styled("span")({
	color: "#e7a021",
	fontSize: "0.55rem",
});

/* ═══════════════════════════════════════════
   Decorative sparkle
   ═══════════════════════════════════════════ */

export const Sparkle = styled("div")<{
	$top?: string;
	$right?: string;
	$bottom?: string;
	$left?: string;
	$size?: number;
}>(({ $top, $right, $bottom, $left, $size = 12 }) => ({
	position: "absolute",
	top: $top,
	right: $right,
	bottom: $bottom,
	left: $left,
	width: $size,
	height: $size,
	zIndex: 1,
	opacity: 0.35,
	pointerEvents: "none",
}));
