import { keyframes, styled } from "@mui/material";

const float = keyframes`
	0%, 100% { transform: translateY(0); }
	50%      { transform: translateY(-8px); }
`;

/* ═══ Section container ═══ */

export const ArmorSection = styled("section")(({ theme }) => ({
	position: "relative",
	width: "100%",
	minHeight: "80vh",
	background: "#0d0d0d",
	display: "flex",
	alignItems: "center",
	overflow: "hidden",
	padding: "4rem 6rem",

	[theme.breakpoints.down("lg")]: {
		padding: "4rem 3rem",
	},
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		padding: "3rem 1.5rem",
		minHeight: "auto",
		gap: "2.5rem",
	},
}));

/* ═══ Armor pieces image ═══ */

export const ArmorImageWrap = styled("div")(({ theme }) => ({
	flex: "1 1 55%",
	display: "flex",
	justifyContent: "center",

	"& img": {
		width: "100%",
		maxWidth: 550,
		height: "auto",
		objectFit: "contain",
	},

	[theme.breakpoints.down("md")]: {
		width: "100%",
	},
}));

/* ═══ Text / info side ═══ */

export const ArmorInfoSide = styled("div")(({ theme }) => ({
	flex: "1 1 45%",
	display: "flex",
	flexDirection: "column",
	gap: "1.2rem",
	paddingLeft: "2rem",
	position: "relative",

	[theme.breakpoints.down("md")]: {
		width: "100%",
		paddingLeft: 0,
		alignItems: "center",
		textAlign: "center",
	},
}));

/* ═══ Molecular icon (floating) ═══ */

export const MoleculeIconWrap = styled("div")({
	color: "#e7a021",
	animation: `${float} 4s ease-in-out infinite`,
});

/* ═══ "40T" big value ═══ */

export const ArmorValue = styled("div")({
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "3.5rem",
	letterSpacing: "4px",
	color: "#e7a021",
	lineHeight: 1,
});

/* ═══ Description paragraph ═══ */

export const ArmorDesc = styled("p")({
	fontFamily: "'Inter', 'Helvetica', sans-serif",
	fontSize: "0.82rem",
	lineHeight: 1.7,
	color: "rgba(255,255,255,0.5)",
	maxWidth: 380,
	margin: 0,
});

/* ═══ Tooltip pointer line (desktop only) ═══ */

export const TooltipLine = styled("div")(({ theme }) => ({
	position: "absolute",
	top: "50%",
	left: "-30px",
	width: 50,
	height: 1,
	background: "linear-gradient(to right, transparent, #e7a021)",

	"&::after": {
		content: '""',
		position: "absolute",
		right: -4,
		top: -3,
		width: 7,
		height: 7,
		borderRadius: "50%",
		background: "#e7a021",
	},

	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));
