import { type StyledComponentProps, styled } from "@mui/material";

export enum BGColor {
	DEFAULT = "#111111",
	SOLID = "#080808",
	GRADIENT = "radial-gradient(ellipse at 60% 40%, rgba(232, 159, 32, 0.1) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(192,57,43,0.06) 0%, transparent 50%), linear-gradient(160deg, #0a0a0a 0%, #161616 40%, #0d0d0d 100%)",
}

interface MainLayoutProps extends StyledComponentProps {
	$bgInfo?: BGColor | string;
	$pt?: string;
	$height?: string;
}

export const MainLayout = styled("div")<MainLayoutProps>(
	({ $bgInfo, $pt, $height, theme }) => ({
		position: "relative",
		paddingTop: $pt || "80px",
		width: "100%",
		minHeight: $height || "100vh",
		background: $bgInfo
			? $bgInfo.startsWith("data:") ||
				$bgInfo.includes(".") ||
				$bgInfo.startsWith("/")
				? `url("${$bgInfo}") no-repeat center/cover`
				: $bgInfo
			: BGColor.GRADIENT,
		display: "flex",
		alignItems: "center",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
			padding: "0 2rem",
		},
	}),
);
