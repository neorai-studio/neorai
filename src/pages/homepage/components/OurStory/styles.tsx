import { keyframes, styled, type StyledComponentProps } from "@mui/material";

const blurIn = keyframes`
  from {
    opacity: 0;
    filter: blur(12px);
    transform: scale(1.04);
  }
  to {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1);
  }
`;

interface TextAnimationProps extends StyledComponentProps {
	$inView?: boolean;
}

export const TextWrap = styled("div")<TextAnimationProps>(
	({ theme, $inView }) => ({
		position: "relative",
		display: "flex",
		flexDirection: "column",
		gap: "1.5rem",
		opacity: 0,
		animation: $inView ? `${blurIn} ${1}s ${"ease-out"} forwards` : "none",

		[theme.breakpoints.down("md")]: {
			paddingLeft: "4rem",
			width: "100%",
		},
		[theme.breakpoints.up("md")]: {
			width: "40%",
		},
	}),
);

export const HeaderWrap = styled("div")<TextAnimationProps>(
	({ theme, $inView }) => ({
		opacity: 0,
		animation: $inView ? `${blurIn} ${700}ms ${"ease-out"} forwards` : "none",

		[theme.breakpoints.down("md")]: {
			paddingLeft: "4rem",
			width: "100%",
		},
		[theme.breakpoints.up("md")]: {
			width: "50%",
		},
	}),
);
