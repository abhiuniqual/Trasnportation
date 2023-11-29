import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#cbab96",
    },
    accent: {
      main: "#999999",
    },
  },
  typography: {
    fontFamily: "Gilroy",
    secondaryFontFamily: "Sora, sans-serif",
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        determinate: {
          height: "10px",
          backgroundColor: "#DDD4CD",
          marginBottom: "24px",
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#CBAB96",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle: {
          fontSize: "28px",
          fontFamily: "Gilroy",
          fontWeight: "700",
        },
        subtitle1: {
          fontFamily: "Gilroy",
          fontWeight: "600",
          fontSize: "20px",
        },
        skip: {
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          fontSize: "18px",
          fontFamily: "Gilroy",
          fontWeight: "600",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        homeNavButton: {
          color: "#FFFFFF",
          textTransform: "capitalize",
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "500",
        },
        navButton: {
          color: "#000000",
          textTransform: "capitalize",
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "500",
        },
        light: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
          border: "1px solid #FFFFFF",
          borderRadius: "0px",
          padding: "12px 24px 12px 24px",
          textTransform: "capitalize",
          fontSize: {
            lg: "17px",
            md: "17px",
            sm: "14px",
            xs: "14px",
          },
          fontWeight: "600",
          fontStyle: "normal",
          fontFamily: "Gilroy",
          "&:hover": {
            backgroundColor: "transparent",
            border: "1px solid #000000",
            color: "#000000",
          },
        },
        dark: {
          color: "#FFFFFF",
          border: "1px solid #000000",
          borderRadius: "0px",
          padding: "12px 24px 12px 24px",
          textTransform: "capitalize",
          fontSize: {
            lg: "17px",
            md: "17px",
            sm: "14px",
            xs: "14px",
          },
          fontWeight: "600",
          fontStyle: "normal",
          fontFamily: "Gilroy",
          "&:hover": {
            backgroundColor: "#CCC",
            border: "1px solid #000000",
            color: "#000000",
          },
        },
        faq: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          border: "1px solid #000000",
          borderRadius: "0px",
          padding: "12px 36px 12px 36px",
          fontSize: {
            lg: "19px",
            md: "19px",
            sm: "16px",
            xs: "16px",
          },
          fontFamily: "Gilroy",
          fontWeight: "600",
          "&:hover": {
            backgroundColor: "transparent",
            border: "1px solid #000000",
            color: "#000000",
          },
        },
        explore: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          border: "1px solid #000000",
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#000000",
            border: "1px solid #000000",
          },
        },
        vechicle: {
          backgroundColor: "#cbab96",
          color: "#FFFFFF",
          textTransform: "capitalize",
          border: "1px solid #cbab96",
          padding: "18px 14px 18px 14px",
          borderRadius: 0,
          "&:hover": {
            backgroundColor: "transparent",
            color: "#000000",
            border: "1px solid #000000",
          },
        },
      },
    },
  },
});

export default theme;
