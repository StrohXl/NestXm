"use client";
import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1200,
      "2xl": 1920,
    },
  },
  typography: {
    fontSize: 13,
    h1: {
      fontSize: "1.5em",
    },
    h2: {
      fontSize: "1.4em",
    },
    h3: {
      fontSize: "1.3em",
    },
    h4: {
      fontSize: "1.2em",
    },
    h5: {
      fontSize: "1.1em",
    },
    h6: {
      fontSize: "1em",
    },

    body2: {
      fontSize: ".8em",
      "@media (min-width: 480px)": {
        fontSize: ".9em",
      },
      "@media (min-width: 768px)": {
        fontSize: "1em",
      },
      "@media (min-width: 992px)": {
        fontSize: "1.1em",
      },
      "@media (min-width: 1200px)": {
        fontSize: "1.2em",
      },
      "@media (min-width: 1900px)": {
        fontSize: "1.3em",
      },
    },
  },
  palette: {
    primary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "7b1fa2",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 12,
          "& .MuiSvgIcon-root": {
            fontSize: "inherit",
          },
        },
      },
    },
  },
});
