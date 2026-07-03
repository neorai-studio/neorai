import { styled } from "@mui/material";

// Small cursor dot
export const Cursor = styled("div")(({ theme }) => ({
	position: "fixed",
	left: 0,
	top: 0,
	width: 10,
	height: 10,
	borderRadius: "50%",
	backgroundColor: theme.palette.primary.main,
	pointerEvents: "none",
	transform: "translate(-50%, -50%)",
	zIndex: 9999,
	mixBlendMode: "difference",
	willChange: "left, top",

	"body.cursor-hover &": {
		width: 15,
		height: 15,
	},
}));

// Outer cursor ring
export const CursorRing = styled("div")(({ theme }) => ({
	position: "fixed",
	left: 0,
	top: 0,
	width: 36,
	height: 36,
	borderRadius: "50%",
	border: `1px solid ${theme.palette.primary.main}`,
	pointerEvents: "none",
	transform: "translate(-50%, -50%)",
	zIndex: 9998,
	transition: "left 0.2s ease-out, top 0.1s ease-out",
	willChange: "left, top",
}));
