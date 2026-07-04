import { keyframes, styled } from "@mui/material";

// ── Keyframes ──
const ringSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const rise = keyframes`
  0%   { transform: translateY(0); opacity: 0; }
  10%  { opacity: 0.7; }
  90%  { opacity: 0.2; }
  100% { transform: translateY(-380px); opacity: 0; }
`;

// ── Section Root ──
export const LayersSectionRoot = styled("section")(({ theme }) => ({
	background: "#0a0908",
	color: "#f5f2ec",
	fontFamily: "'Inter', sans-serif",
	padding: "100px 0 120px",
	position: "relative",
	overflow: "hidden",

	[theme.breakpoints.down("md")]: {
		padding: "60px 0 80px",
	},
}));

export const BgGlow = styled("div")({
	position: "absolute",
	top: "10%",
	left: "50%",
	width: 900,
	height: 900,
	transform: "translateX(-50%)",
	background: "radial-gradient(circle, rgba(232,163,61,.07), transparent 62%)",
	pointerEvents: "none",
});

// ── Grid Layout ──
export const ContentGrid = styled("div")(({ theme }) => ({
	maxWidth: 1180,
	margin: "0 auto",
	padding: "0 32px",
	display: "grid",
	gridTemplateColumns: "minmax(0, 440px) minmax(0, 1fr)",
	gap: 72,
	alignItems: "center",

	[theme.breakpoints.down("md")]: {
		gridTemplateColumns: "1fr",
		gap: 44,
	},
}));

// ── Copy (left side) ──
export const CopyWrapper = styled("div")<{ $inView: boolean }>(
	({ $inView }) => ({
		opacity: $inView ? 1 : 0,
		transform: $inView ? "translateY(0)" : "translateY(20px)",
		transition: "opacity 0.8s ease, transform 0.8s ease",

		"@media (prefers-reduced-motion: reduce)": {
			transition: "none",
		},
	}),
);

export const Eyebrow = styled("div")({
	display: "flex",
	alignItems: "center",
	gap: 10,
	color: "#e8a33d",
	fontFamily: "'Oswald', sans-serif",
	fontSize: 13,
	letterSpacing: ".28em",
	textTransform: "uppercase",
	marginBottom: 18,

	"&::before": {
		content: '""',
		width: 22,
		height: 1,
		background: "#e8a33d",
		display: "inline-block",
	},
});

export const Title = styled("h2")({
	fontFamily: "'Oswald', sans-serif",
	fontWeight: 700,
	textTransform: "uppercase",
	fontSize: "clamp(30px, 3.8vw, 46px)",
	lineHeight: 1.08,
	margin: "0 0 18px",
	color: "#f5f2ec",

	"& em": {
		fontStyle: "normal",
		color: "#e8a33d",
	},
});

export const Subtitle = styled("p")({
	color: "#9c958c",
	fontSize: 15.5,
	lineHeight: 1.65,
	maxWidth: 400,
	margin: "0 0 36px",
});

// ── Layer Nav ──
export const NavList = styled("ul")({
	listStyle: "none",
	margin: 0,
	padding: 0,
	display: "flex",
	flexDirection: "column",
});

export const NavItem = styled("li")<{ $active: boolean }>(({ $active }) => ({
	borderTop: "1px solid #2a2622",
	padding: "16px 0",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	gap: 16,
	opacity: $active ? 1 : 0.5,
	transition: "opacity 0.3s ease",

	"&:last-child": {
		borderBottom: "1px solid #2a2622",
	},
}));

export const NavIndex = styled("span")<{ $active: boolean }>(({ $active }) => ({
	fontFamily: "'Oswald', sans-serif",
	fontSize: 12,
	color: $active ? "#141210" : "#e8a33d",
	border: "1px solid rgba(232,163,61,0.4)",
	width: 26,
	height: 26,
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	transition: "background 0.3s ease, color 0.3s ease",
	background: $active ? "#e8a33d" : "transparent",
}));

export const NavTextBlock = styled("span")({
	display: "flex",
	flexDirection: "column",
});

export const NavTitle = styled("b")({
	display: "block",
	fontFamily: "'Oswald', sans-serif",
	fontSize: 14.5,
	letterSpacing: ".03em",
	textTransform: "uppercase",
	color: "#f5f2ec",
});

export const NavDescription = styled("span")({
	display: "block",
	fontSize: 12.5,
	color: "#9c958c",
	marginTop: 3,
	lineHeight: 1.5,
	maxWidth: 280,
});

export const HintText = styled("div")({
	marginTop: 26,
	fontSize: 11.5,
	letterSpacing: ".14em",
	textTransform: "uppercase",
	color: "#9c958c",
	display: "flex",
	alignItems: "center",
	gap: 8,
	fontFamily: "'Oswald', sans-serif",

	"& svg": {
		width: 14,
		height: 14,
		color: "#e8a33d",
	},
});

// ── Stack Stage (right side) ──
export const StackStageWrapper = styled("div")(({ theme }) => ({
	position: "relative",
	height: 800,
	display: "flex",
	alignItems: "flex-start",
	justifyContent: "center",
	paddingTop: "40px",

	[theme.breakpoints.down("md")]: {
		height: "auto",
		padding: "20px 0",
	},
}));

export const StackRing = styled("div")<{ $variant?: "secondary" }>(
	({ $variant }) => ({
		position: "absolute",
		width: $variant === "secondary" ? 560 : 480,
		height: $variant === "secondary" ? 560 : 480,
		border: `1px dashed ${$variant === "secondary" ? "rgba(232,163,61,.09)" : "rgba(232,163,61,.18)"}`,
		borderRadius: "50%",
		animation: `${ringSpin} ${$variant === "secondary" ? "60s" : "40s"} linear infinite`,
		animationDirection: $variant === "secondary" ? "reverse" : "normal",
		pointerEvents: "none",

		"@media (prefers-reduced-motion: reduce)": {
			animation: "none",
		},
	}),
);

export const Particle = styled("div")<{
	$left: string;
	$duration: string;
	$delay: string;
}>((props) => ({
	position: "absolute",
	bottom: 20,
	left: props.$left,
	width: 3,
	height: 3,
	borderRadius: "50%",
	background: "#e8a33d",
	opacity: 0.6,
	animation: `${rise} ${props.$duration} linear infinite`,
	animationDelay: props.$delay,
	pointerEvents: "none",

	"@media (prefers-reduced-motion: reduce)": {
		display: "none",
	},
}));

// ── Layer Stack ──
const CARD_BACKGROUNDS = [
	"linear-gradient(135deg, #1d1a16, #161310)",
	"linear-gradient(135deg, #201a12, #171310)",
	"linear-gradient(135deg, #191713, #141210)",
	"linear-gradient(135deg, #161412, #111010)",
];

export const LayerStackWrapper = styled("div")(({ theme }) => ({
	position: "relative",
	width: "30rem",
	height: 700,

	[theme.breakpoints.down("md")]: {
		width: "90%",
		maxWidth: 420,
		height: 710,
	},

	[theme.breakpoints.down("sm")]: {
		width: "95%",
		height: 710,
	},
}));

export const LayerCard = styled("div")<{
	$revealed: boolean;
	$highlight: boolean;
	$layerIndex: number;
	$exploded: boolean;
}>(({ $revealed, $highlight, $layerIndex, $exploded, theme }) => ({
	position: "absolute",
	left: 0,
	width: "80%",
	minHeight: "8rem",
	height: "fit-content",
	borderRadius: 10,
	border: `1px solid ${$highlight ? "#e8a33d" : "#2a2622"}`,
	display: "flex",
	alignItems: "center",
	padding: "0 10%",
	gap: 20,
	backdropFilter: "blur(4px)",
	background: CARD_BACKGROUNDS[$layerIndex] || CARD_BACKGROUNDS[0],
	zIndex: 4 - $layerIndex,
	top: $layerIndex * 150 + 24,
	opacity: $revealed ? 1 : 0,
	transform: $revealed
		? "translateX(0) rotate(0deg)"
		: $layerIndex % 2 === 0
			? "translateX(60px) rotate(3deg)"
			: "translateX(-60px) rotate(-3deg)",
	boxShadow: $highlight
		? "0 0 0 1px rgba(232,163,61,.5), 0 18px 40px -10px rgba(0,0,0,.7)"
		: "0 4px 16px -4px rgba(0,0,0,.3)",
	transition:
		"top 0.6s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1), opacity 0.6s ease, box-shadow 0.4s ease, border-color 0.4s ease",
	cursor: "pointer",

	"@media (prefers-reduced-motion: reduce)": {
		transition: "none",
	},

	[theme.breakpoints.down("md")]: {
		width: "80%",
	},

	[theme.breakpoints.down("sm")]: {
		width: "90%",
		minHeight: "11rem",
		padding: "0 8%",
		top: $exploded ? $layerIndex * 200 : $layerIndex * 38 + 24,
	},
}));

export const LayerNum = styled("span")<{ $highlight: boolean }>(
	({ $highlight }) => ({
		fontFamily: "'Oswald', sans-serif",
		fontSize: 28,
		color: "#e8a33d",
		opacity: $highlight ? 1 : 0.5,
		width: 32,
		flexShrink: 0,
		transition: "opacity 0.3s ease",
	}),
);

export const LayerInfo = styled("span")({
	display: "flex",
	flexDirection: "column",
});

export const LayerInfoTitle = styled("b")({
	display: "block",
	fontFamily: "'Oswald', sans-serif",
	fontSize: 16,
	letterSpacing: ".04em",
	textTransform: "uppercase",
	color: "#f5f2ec",
	marginBottom: 4,
});

export const LayerInfoDesc = styled("span")({
	display: "block",
	fontSize: 13,
	lineHeight: 1.5,
	color: "#9c958c",
	marginTop: 2,
});
