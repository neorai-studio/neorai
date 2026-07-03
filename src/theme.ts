import { createTheme } from "@mui/material";

const theme = createTheme({
	direction: "rtl",
	typography: {
		fontFamily: "Bebas Neue",
		fontSize: 13,
	},
	palette: {
		primary: {
			main: "#e7a021",
			light: "#f0ece7",
			contrastText: "white",
		},
		secondary: {
			main: "#A593C2",
			light: "#D5B7EC",
			dark: "#8E73BA",
			contrastText: "#EBE9F8",
		},
		background: {
			default: "#F3F2F7",
			paper: "#FAF9FC",
		},
		text: {
			primary: "#3C3646",
			secondary: "#9398C2",
		},
	},
	components: {
		mergeClassNameAndStyle: true,
		MuiButton: {
			defaultProps: {
				className: "default-button-class",
				style: { borderRadius: "1px" },
			},
		},
	},
});

export default theme;
