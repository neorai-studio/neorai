import { styled } from "@mui/material";

/* ═══ Footer container ═══ */

export const FooterSection = styled("footer")(({ theme }) => ({
	width: "100%",
	background: "#0a0a0a",
	borderTop: "1px solid #1a1a1a",
	padding: "3rem 6rem 1.5rem",
	display: "flex",
	flexDirection: "column",
	gap: "2rem",

	[theme.breakpoints.down("lg")]: {
		padding: "3rem 3rem 1.5rem",
	},
	[theme.breakpoints.down("md")]: {
		padding: "2.5rem 1.5rem 1rem",
	},
}));

/* ═══ Column grid ═══ */

export const FooterGrid = styled("div")(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(4, 1fr)",
	gap: "2rem",

	[theme.breakpoints.down("md")]: {
		gridTemplateColumns: "repeat(2, 1fr)",
	},
	[theme.breakpoints.down("sm")]: {
		gridTemplateColumns: "1fr",
		gap: "1.5rem",
	},
}));

export const FooterColumn = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: "0.55rem",
});

export const FooterTitle = styled("h4")({
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "0.8rem",
	letterSpacing: "3px",
	color: "rgba(255,255,255,0.65)",
	margin: 0,
	marginBottom: "0.5rem",
	textTransform: "uppercase",
});

export const FooterLink = styled("a")({
	fontFamily: "'Inter', 'Helvetica', sans-serif",
	fontSize: "0.72rem",
	color: "rgba(255,255,255,0.35)",
	textDecoration: "none",
	transition: "color 0.2s ease",

	"&:hover": {
		color: "rgba(255,255,255,0.8)",
	},
});

/* ═══ Social icons row ═══ */

export const SocialIcons = styled("div")({
	display: "flex",
	gap: "0.6rem",
	alignItems: "center",
	flexWrap: "wrap",
});

export const SocialIcon = styled("a")({
	width: 30,
	height: 30,
	borderRadius: "50%",
	border: "1px solid rgba(255,255,255,0.15)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "rgba(255,255,255,0.45)",
	transition: "all 0.25s ease",
	textDecoration: "none",

	"&:hover": {
		borderColor: "#e7a021",
		color: "#e7a021",
		transform: "translateY(-2px)",
	},

	"& svg": {
		width: 14,
		height: 14,
	},
});

/* ═══ Copyright bar ═══ */

export const Copyright = styled("div")({
	borderTop: "1px solid #1a1a1a",
	paddingTop: "1rem",
	fontFamily: "'Inter', 'Helvetica', sans-serif",
	fontSize: "0.65rem",
	color: "rgba(255,255,255,0.22)",
	textAlign: "center",
	letterSpacing: "1px",
});
