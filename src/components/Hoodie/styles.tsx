import { keyframes, styled, type StyledComponentProps } from "@mui/material";
import type { CSSProperties } from "react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

export const Img = styled("img")({
	width: "75%",
	height: "100%",
});

const armorBaseStyle: CSSProperties = {
	position: "absolute",
	zIndex: 6,
	pointerEvents: "auto",
	/* Smooth transition for the hover glow effect */
	transition: "filter 0.3s ease",
};

interface ShoulderPartProps extends StyledComponentProps {
	rotate?: string;
	flipX?: boolean;
	downMd: { width: string; height: string; top: string; left: string };
	upMd: { width: string; height: string; top: string; left: string };
}

export const ArmorPart = styled("img")<ShoulderPartProps>(
	({ theme, rotate = "0deg", flipX = false, downMd, upMd }) => ({
		...armorBaseStyle,
		transform: `${flipX ? "scaleX(-1) " : ""}rotate(${rotate})`,

		/* Golden glow on hover to indicate interactivity */
		"&:hover": {
			filter: "drop-shadow(0 0 8px rgba(232, 160, 32, 0.5))",
		},

		[theme.breakpoints.down("md")]: {
			...downMd,
		},
		[theme.breakpoints.up("md")]: {
			...upMd,
		},
	}),
);
