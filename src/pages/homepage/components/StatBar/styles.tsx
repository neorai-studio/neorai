import { type StyledComponentProps, styled } from "@mui/material";

interface MainLayoutProps extends StyledComponentProps {
	$inView?: boolean;
}

export const MainLayout = styled("div")<MainLayoutProps>(
	({ $inView, theme }) => ({
		background: "#1a1a1a",
		borderTop: "1px solid #2a2a2a",
		borderBottom: "1px solid #2a2a2a",
		width: "100%",
		opacity: 0,
		...($inView && {
			animation: "fadeIn 1s ease-in-out forwards",
		}),
		"@keyframes fadeIn": {
			"0%": {
				opacity: 0,
				transform: "translateY(20px)",
			},
			"100%": {
				opacity: 1,
				transform: "translateY(0)",
			},
		},

		[theme.breakpoints.down("md")]: {
			height: "10rem",
			padding: "1rem",
		},
		[theme.breakpoints.up("md")]: {
			height: "9rem",
		},
	}),
);

export const ContentWrap = styled("div")(({ theme }) => ({
	height: "100%",

	[theme.breakpoints.down("md")]: {
		width: "90%",
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
	},
	[theme.breakpoints.up("md")]: {
		width: "100%",
		display: "flex",
		alignItems: "center",
	},
}));

export const StatBarItem = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "0.5rem",

	[theme.breakpoints.down("md")]: {
		display: "flex",
		height: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: "0.5rem",

		"&:nth-child(odd)": {
			borderRight: "1px solid #2a2a2a",
		},
	},
	[theme.breakpoints.up("md")]: {
		height: "70%",
		flex: 1,

		"&:not(:last-child)": {
			borderRight: "1px solid #2a2a2a",
		},
	},

	"&:hover .stat-item-value": {
		transform: "scale(1.1)",
	},

	"&:hover .stat-item-info": {
		transform: "scale(1.1)",
	},
}));

export const ItemValue = styled("div")(({ theme }) => ({
	color: theme.palette.primary.main,
	fontSize: "2rem",
	fontWeight: "bold",
	transition: "transform 0.3s ease-in-out",
}));

export const ItemInfo = styled("div")({
	color: "#9a9a9a",
	fontSize: "0.7rem",
	fontWeight: 300,
	letterSpacing: "0.2em",
	textTransform: "uppercase",
	textAlign: "center",
	transition: "transform 0.3s ease-in-out",
});
