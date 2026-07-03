import { styled } from "@mui/material";

export const ImpactSectionWrapper = styled("section")(({ theme }) => ({
	position: "relative",
	backgroundColor: "#080706",
	color: "#f5f2ec",
	fontFamily: "'Inter', sans-serif",
	minHeight: "560px",
	height: "78vh",
	overflow: "hidden",
	display: "flex",
	alignItems: "center",
	width: "100%",

	[theme.breakpoints.up("sm")]: {
		minHeight: "640px",
		height: "88vh",
		maxHeight: "820px",
	},
}));

export const StyledCanvas = styled("canvas")({
	position: "absolute",
	inset: 0,
	width: "100%",
	height: "100%",
	display: "block",
	pointerEvents: "none",
	willChange: "transform",
});

export const ImpactVignette = styled("div")({
	position: "absolute",
	inset: 0,
	background:
		"radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(8,7,6,.55) 78%, rgba(8,7,6,.92) 100%)",
	pointerEvents: "none",
});

export const ImpactContentWrapper = styled("div")<{ $inView: boolean }>(({ $inView }) => ({
	position: "relative",
	zIndex: 2,
	width: "100%",
	maxWidth: "1180px",
	margin: "0 auto",
	padding: "0 32px",
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	opacity: $inView ? 1 : 0,
	transform: $inView ? "translateY(0)" : "translateY(14px)",
	transition: "opacity 1s ease, transform 1s ease",
	
	"@media (prefers-reduced-motion: reduce)": {
		transition: "none",
	},
}));

export const ImpactEyebrow = styled("div")({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	color: "#e8a33d",
	fontFamily: "'Oswald', sans-serif",
	fontSize: "12.5px",
	letterSpacing: ".3em",
	textTransform: "uppercase",
	marginBottom: "20px",

	"&::before, &::after": {
		content: '""',
		width: "22px",
		height: "1px",
		background: "#e8a33d",
		display: "inline-block",
	},
});

export const ImpactTitle = styled("h2")(({ theme }) => ({
	fontFamily: "'Oswald', sans-serif",
	fontWeight: 700,
	textTransform: "uppercase",
	fontSize: "clamp(26px, 8vw, 38px)",
	lineHeight: 1.06,
	margin: "0 0 26px",
	maxWidth: "820px",

	"& em": {
		fontStyle: "normal",
		color: "#e8a33d",
	},

	[theme.breakpoints.up("sm")]: {
		fontSize: "clamp(30px, 6vw, 64px)",
	},
}));

export const CaptionRail = styled("div")({
	position: "relative",
	height: "26px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	overflow: "hidden",
	marginBottom: "10px",
});

export const Caption = styled("span")<{ $active: boolean }>(({ $active }) => ({
	position: "absolute",
	fontFamily: "'JetBrains Mono', monospace",
	fontSize: "12.5px",
	letterSpacing: ".16em",
	textTransform: "uppercase",
	color: $active ? "#ffb347" : "#8f887e",
	opacity: $active ? 1 : 0,
	transform: $active ? "translateY(0)" : "translateY(8px)",
	transition: "opacity .5s ease, transform .5s ease",
	whiteSpace: "nowrap",
}));



export const Fineprint = styled("p")({
	fontSize: "11.5px",
	color: "#8f887e",
	letterSpacing: ".02em",
	maxWidth: "380px",
	lineHeight: 1.6,
});
