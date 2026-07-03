import { styled } from "@mui/material";

/* ═══ Section container ═══ */

export const GridSection = styled("section")({
	width: "100%",
	background: "#0a0a0a",
	padding: 0,
});

/* ═══ Photo grid — 3 cols desktop → 2 tablet → 1 mobile ═══ */

export const PhotoGrid = styled("div")(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(6, 1fr)",
	gap: "3px",
	width: "100%",

	"& > div:nth-of-type(1), & > div:nth-of-type(2), & > div:nth-of-type(3)": {
		gridColumn: "span 2",
	},
	"& > div:nth-of-type(4), & > div:nth-of-type(5)": {
		gridColumn: "span 3",
	},

	[theme.breakpoints.down("md")]: {
		gridTemplateColumns: "repeat(2, 1fr)",
		"& > div": {
			gridColumn: "span 1 !important",
		},
		"& > div:last-child": {
			gridColumn: "span 2 !important",
		},
	},
	[theme.breakpoints.down("sm")]: {
		gridTemplateColumns: "1fr",
		"& > div": {
			gridColumn: "span 1 !important",
		},
	},
}));

/* ═══ Individual grid cell ═══ */

export const GridItem = styled("div")({
	position: "relative",
	aspectRatio: "1 / 1",
	overflow: "hidden",

	"& img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		transition: "transform 0.6s ease, filter 0.6s ease",
	},

	"&:hover img": {
		transform: "scale(1.06)",
		filter: "brightness(1.15)",
	},

	/* Subtle bottom gradient overlay */
	"&::after": {
		content: '""',
		position: "absolute",
		inset: 0,
		background:
			"linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.35) 100%)",
		pointerEvents: "none",
		transition: "opacity 0.4s ease",
	},

	"&:hover::after": {
		opacity: 0.5,
	},
});
