import { keyframes, styled } from "@mui/material";

const marquee = keyframes`
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
	`;

export const MainLayout = styled("div")({
	height: "0.7rem",
	overflow: "hidden",
	borderTop: "1px solid #2a2a2a",
	borderBottom: "1px solid #2a2a2a",
	padding: "2rem 0",
	background: "#1a1a1a",
});

export const MarqueeTrack = styled("div")({
	display: "flex",
	gap: "1rem",
	width: "max-content",
	animation: `${marquee} 20s linear infinite`,
});
export const MarqueeItem = styled("div")(({ theme }) => ({
	fontFamily: "'Bebas Neue', sans-serif",
	fontSize: "0.8rem",
	letterSpacing: "4px",
	textTransform: "uppercase",
	color: "#3d3d3d",
	whiteSpace: "nowrap",
	display: "flex",
	alignItems: "center",
	gap: "1rem",

	"&::after": {
		content: '"◆"',
		color: theme.palette.primary.main,
		fontSize: "10px",
	},
}));
