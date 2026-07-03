import { styled } from "@mui/material";
import fabricTexture from "../../../../assets/images/fabric-texture.jpg";

/* ═══ Section container ═══ */

export const PremiumSection = styled("section")(({ theme }) => ({
	position: "relative",
	width: "100%",
	minHeight: "90vh",
	background: "#0a0a0a",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	overflow: "hidden",
	padding: "4rem 2rem",

	[theme.breakpoints.down("md")]: {
		minHeight: "70vh",
		padding: "3rem 1rem",
	},
}));

/* ═══ Fabric texture overlay ═══ */

export const FabricOverlay = styled("div")({
	position: "absolute",
	inset: 0,
	backgroundImage: `url(${fabricTexture})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	opacity: 0.35,

	"&::after": {
		content: '""',
		position: "absolute",
		inset: 0,
		background:
			"linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.85) 100%)",
	},
});

/* ═══ Content row: viewport + line + callout ═══ */

export const ContentRow = styled("div")(({ theme }) => ({
	position: "relative",
	zIndex: 2,
	display: "flex",
	alignItems: "center",
	gap: "2.5rem",

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		gap: "2rem",
	},
}));

/* ═══ Circular viewport showing the torn fabric ═══ */

export const ViewportCircle = styled("div")(({ theme }) => ({
	width: 240,
	height: 240,
	borderRadius: "50%",
	overflow: "hidden",
	border: "2px solid rgba(232,160,32,0.25)",
	flexShrink: 0,
	position: "relative",
	boxShadow: "0 0 40px rgba(232,160,32,0.1)",

	"& img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},

	[theme.breakpoints.down("sm")]: {
		width: 180,
		height: 180,
	},
}));

/* ═══ Dashed pointer line (desktop only) ═══ */

export const PointerLine = styled("div")(({ theme }) => ({
	width: 80,
	height: 0,
	borderTop: "1px dashed rgba(232,160,32,0.4)",
	position: "relative",
	flexShrink: 0,

	/* Dot at the end of the line */
	"&::after": {
		content: '""',
		position: "absolute",
		right: -4,
		top: -4,
		width: 7,
		height: 7,
		borderRadius: "50%",
		background: "#e7a021",
	},

	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

/* ═══ Callout text box ═══ */

export const CalloutBox = styled("div")(({ theme }) => ({
	maxWidth: 350,

	[theme.breakpoints.down("md")]: {
		textAlign: "center",
		maxWidth: 500,
	},
}));

export const CalloutLabel = styled("div")({
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "0.7rem",
	letterSpacing: "3px",
	color: "#e7a021",
	marginBottom: "0.6rem",
	textTransform: "uppercase",
});

export const CalloutHeadline = styled("h3")({
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "1.35rem",
	letterSpacing: "2px",
	color: "rgba(255,255,255,0.9)",
	lineHeight: 1.35,
	margin: 0,

	"& strong": {
		color: "#fff",
		fontWeight: 700,
	},
});

/* ═══ Bottom section label ═══ */

export const SectionLabel = styled("div")({
	position: "absolute",
	bottom: "2.5rem",
	left: "50%",
	transform: "translateX(-50%)",
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "1.1rem",
	letterSpacing: "4px",
	color: "rgba(255,255,255,0.75)",
	display: "flex",
	alignItems: "center",
	gap: "0.6rem",
	zIndex: 2,
	whiteSpace: "nowrap",

	"&::before": {
		content: '"◆"',
		color: "#e7a021",
		fontSize: "0.5rem",
	},
});
