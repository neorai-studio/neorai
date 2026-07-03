import {
	Button,
	keyframes,
	type StyledComponentProps,
	styled,
} from "@mui/material";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface BtnProps extends StyledComponentProps {
	$width?: string;
	$height?: string;
	$fontSize?: string;
	$fontWeight?: string | number;
}

export const OperaBtm = styled(Button)<BtnProps>(
	({ $width, $height, $fontSize, $fontWeight, theme }) => ({
		fontSize: $fontSize || "0.8rem",
		width: $width || "14rem",
		minWidth: "160px",
		height: $height || "3rem",
		background: theme.palette.primary.main,
		color: "black",
		fontWeight: $fontWeight || 700,
		textAlign: "center",
		clipPath:
			"polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
		letterSpacing: "0.2em",
		position: "relative",
		overflow: "hidden",
		opacity: 0,
		animation: `${fadeIn} 2s 0.7s forwards`,

		// gradient background that will "slide"
		backgroundImage: `linear-gradient(to right, ${theme.palette.primary.light} 50%, ${theme.palette.primary.main} 50%)`,
		backgroundSize: "200% 100%",
		backgroundPosition: "right bottom",
		transition: "background-position 0.3s ease",

		// slide the lighter color in on hover
		"&:hover": {
			backgroundPosition: "left bottom",
		},
	}),
);

export const OutlineBtn = styled(Button)<BtnProps>(
	({ $width, $height, $fontSize }) => ({
		fontSize: $fontSize || "0.8rem",
		width: $width || "7rem",
		minWidth: "100px",
		height: $height || "3rem",
		border: `1px solid #9a9a9a`,
		color: "#9a9a9a",
		background: "transparent",
		opacity: 0,
		animation: `${fadeIn} 2s 0.7s forwards`,

		":hover": {
			borderColor: "white",
			color: "white",
		},
	}),
);

export const BasicButton = styled(Button)<BtnProps>(
	({ $width, $height, $fontSize, theme }) => ({
		fontSize: $fontSize || "0.8rem",
		width: $width || "8rem",
		height: $height || "1.8rem",
		background: theme.palette.primary.main,
		color: "black",
		fontWeight: "bold",
		"&:hover": {
			background: theme.palette.primary.light,
		},

		[theme.breakpoints.down("sm")]: {
			width: "fit-content",
		},
	}),
);
