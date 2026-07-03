import { AppBar, styled, Typography } from "@mui/material";

export const MainLayout = styled(AppBar)({
	width: "100%",
	height: "80px",
	color: "white",
	backgroundColor: "rgba(8, 8, 8, 0.95)",
	backdropFilter: "blur(12px)",
	borderBottom: "1px solid rgb(26, 26, 26)",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "0 2rem",
	justifyItems: "center",
});

export const BrandName = styled(Typography)({
	fontSize: "1.2rem",
	fontWeight: "bold",
});

export const BtnWrap = styled("div")(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		marginRight: "2rem",
	},
}));
