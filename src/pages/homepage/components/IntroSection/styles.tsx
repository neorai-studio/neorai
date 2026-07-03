import { keyframes, styled } from "@mui/material";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MainLayout = styled("div")(({ theme }) => ({
	position: "relative",
	minHeight: "100vh",
	paddingTop: "80px",
	width: "100%",
	background:
		"radial-gradient(ellipse at 60% 40%, rgba(232, 159, 32, 0.1) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(192,57,43,0.06) 0%, transparent 50%), linear-gradient(160deg, #0a0a0a 0%, #161616 40%, #0d0d0d 100%)",
	display: "flex",
	alignItems: "center",

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
	[theme.breakpoints.up("md")]: {
		flexDirection: "row",
		padding: "0 2rem",
	},
}));

export const SectionHeadline = styled("div")(({ theme }) => ({
	fontSize: "0.6rem",
	color: theme.palette.primary.main,
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
	textTransform: "uppercase",
	letterSpacing: "0.3em",
	opacity: 0,
	animation: `${fadeIn}  2s 0.3s forwards`,
}));

export const HeroText = styled("div")(({ theme }) => ({
	fontWeight: 800,
	fontSize: "4.5rem",
	lineHeight: 1.1,
	color: theme.palette.primary.light,
	opacity: 0,
	animation: `${fadeIn} 2s 0.5s forwards`,

	"& .highlight": {
		color: theme.palette.primary.main,
	},
}));

export const ImgWrap = styled("div")(({ theme }) => ({
	position: "relative",
	height: "90%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	paddingTop: "4rem",
	animation: `${fadeIn} 3s 0.9s forwards`,
	opacity: 0,

	[theme.breakpoints.down("md")]: {
		width: "100%",
	},
	[theme.breakpoints.up("md")]: {
		width: "60%",
	},
}));

export const TextWrap = styled("div")(({ theme }) => ({
	height: "90%",
	display: "flex",
	flexDirection: "column",
	gap: "2rem",

	[theme.breakpoints.down("md")]: {
		width: "85%",
		marginTop: "3rem",
	},
	[theme.breakpoints.up("md")]: {
		width: "40%",
	},
}));

export const Img = styled("img")({
	width: "75%",
	height: "100%",
});

export const ImgBackArmor = styled("img")(({ theme }) => ({
	position: "absolute",
	zIndex: 6,
	pointerEvents: "auto",
	animations: `${fadeIn} 3s 0.5s forwards`,

	[theme.breakpoints.down("md")]: {
		width: "18%",
		height: "28%",
		top: "49%",
		left: "22.5%",
	},
	[theme.breakpoints.up("md")]: {
		width: "21%",
		height: "32%",
		top: "42%",
		left: "21%",
	},
}));

export const ImgBackShoulderArmor = styled("img")(({ theme }) => ({
	position: "absolute",
	zIndex: 6,
	pointerEvents: "auto",
	animations: `${fadeIn} 3s 0.5s forwards`,
	transform: "rotate(-23deg)",
	[theme.breakpoints.down("md")]: {
		width: "18%",
		height: "28%",
		top: "49%",
		left: "22.5%",
	},
	[theme.breakpoints.up("md")]: {
		width: "8%",
		height: "8%",
		top: "38%",
		left: "18.5%",
	},
}));

export const BtmWrap = styled("div")({
	display: "flex",
	gap: "1rem",
	marginTop: "2rem",
	flexWrap: "wrap",
});
