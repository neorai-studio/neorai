import { keyframes, styled } from "@mui/material";

const fadeIn = keyframes`
  from {
	opacity: 0;
  }
  to {
	opacity: 1;
  }
`;

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

export const HeroSubtitleText = styled("div")(({ theme }) => ({
	fontWeight: 800,
	lineHeight: 1.1,
	color: theme.palette.primary.light,
	opacity: 0,
	animation: `${fadeIn} 2s 0.5s forwards`,
	textTransform: "uppercase",

	"& .highlight": {
		color: theme.palette.primary.main,
	},

	"& .outline": {
		color: "transparent",
		WebkitTextStroke: `3px ${theme.palette.primary.main}`,
	},

	[theme.breakpoints.down("md")]: {
		fontSize: "2.5rem",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "4.5rem",
	},
}));

export const HeroEyebrow = styled("div")(({ theme }) => ({
	"&:before": {
		content: `""`,
		display: "block",
		width: "1rem",
		height: "1px",
		backgroundColor: theme.palette.primary.main,
	},
	opacity: 0,
	animation: `${fadeIn}  2s 0.3s forwards`,
}));

export const HeroParagraphText = styled("div")({
	width: "80%",
	fontSize: "0.9rem",
	color: "#9a9a9a",
	fontWeight: 300,
	lineHeight: 1.6,
	opacity: 0,
	animation: `${fadeIn} 2s 0.5s forwards`,
});
