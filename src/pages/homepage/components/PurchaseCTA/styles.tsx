import { keyframes, styled } from "@mui/material";

const shimmer = keyframes`
  0% {
    transform: translateX(-150%) skewX(-25deg);
  }
  100% {
    transform: translateX(150%) skewX(-25deg);
  }
`;

const gentlePulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;


/* ═══ Section container ═══ */

export const CTASection = styled("section")(({ theme }) => ({
	width: "100%",
	minHeight: "80vh",
	background: "#111111",
	display: "flex",
	alignItems: "center",
	padding: "4rem 6rem",

	[theme.breakpoints.down("lg")]: {
		padding: "4rem 3rem",
	},
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		padding: "3rem 1.5rem",
		minHeight: "auto",
		gap: "3rem",
	},
}));

/* ═══ Product image ═══ */

export const ProductImageWrap = styled("div")(({ theme }) => ({
	flex: "1 1 50%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	"& img": {
		maxWidth: "90%",
		height: "auto",
		maxHeight: "70vh",
		objectFit: "contain",
		filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.6))",
	},

	[theme.breakpoints.down("md")]: {
		width: "100%",
		"& img": {
			maxHeight: "50vh",
		},
	},
}));

/* ═══ CTA content side ═══ */

export const CTAContent = styled("div")(({ theme }) => ({
	flex: "1 1 50%",
	display: "flex",
	flexDirection: "column",
	gap: "1.8rem",
	paddingLeft: "3rem",

	[theme.breakpoints.down("md")]: {
		width: "100%",
		alignItems: "center",
		textAlign: "center",
		paddingLeft: 0,
	},
}));

export const CTATitle = styled("h2")({
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "4.5rem",
	letterSpacing: "8px",
	color: "#ffffff",
	margin: 0,
	lineHeight: 1,
});

/* ═══ Color selector ═══ */

export const ColorLabel = styled("div")({
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "0.8rem",
	letterSpacing: "3px",
	color: "rgba(255,255,255,0.45)",
	textTransform: "uppercase",
	marginBottom: "0.4rem",
});

export const ColorSwatches = styled("div")({
	display: "flex",
	gap: "0.8rem",
	alignItems: "center",
});

export const ColorSwatch = styled("button")<{
	$color: string;
	$active?: boolean;
}>(({ $color, $active }) => ({
	width: 34,
	height: 34,
	borderRadius: "50%",
	background: $color,
	border: $active
		? "2.5px solid #e7a021"
		: "2.5px solid rgba(255,255,255,0.15)",
	outline: "none",
	padding: 0,
	transition: "border-color 0.2s ease, transform 0.2s ease",

	"&:hover": {
		borderColor: "#e7a021",
		transform: "scale(1.15)",
	},
}));

/* ═══ Buy button ═══ */

export const BuyButton = styled("a")({
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "1.1rem",
	letterSpacing: "4px",
	padding: "1rem 3rem",
	background: "#e7a021",
	color: "#000",
	border: "none",
	fontWeight: 700,
	textTransform: "uppercase",
	textDecoration: "none",
	display: "inline-block",
	textAlign: "center",
	clipPath:
		"polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
	transition: "background 0.3s ease, transform 0.2s ease",
	width: "fit-content",
	position: "relative",
	overflow: "hidden",
	animation: `${gentlePulse} 2s infinite ease-in-out`,

	"&::after": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		width: "200%",
		height: "100%",
		background: "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.45), transparent)",
		transform: "translateX(-150%) skewX(-25deg)",
		animation: `${shimmer} 3.5s infinite ease-in-out`,
		pointerEvents: "none",
	},

	"&:hover": {
		background: "#f0ece7",
		animation: "none",
		transform: "scale(1.06) translateY(-2px)",
	},
});
