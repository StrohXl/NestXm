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
      fontSize: "2em",
      "@media (min-width: 480px)": {
        fontSize: "2.2em",
      },
      "@media (min-width: 768px)": {
        fontSize: "2.4em",
      },
      "@media (min-width: 992px)": {
        fontSize: "2.6em",
      },
      "@media (min-width: 1200px)": {
        fontSize: "2.8em",
      },
      "@media (min-width: 1900px)": {
        fontSize: "3em",
      },
    },
    h2: {
      fontSize: "1.8em",
      "@media (min-width: 480px)": {
        fontSize: "2em",
      },
      "@media (min-width: 768px)": {
        fontSize: "2.2em",
      },
      "@media (min-width: 992px)": {
        fontSize: "2.4em",
      },
      "@media (min-width: 1200px)": {
        fontSize: "2.6em",
      },
      "@media (min-width: 1900px)": {
        fontSize: "2.8em",
      },
    },
    h3: {
      fontSize: "1.6em",
      "@media (min-width: 480px)": {
        fontSize: "1.65em",
      },
      "@media (min-width: 768px)": {
        fontSize: "1.70em",
      },
      "@media (min-width: 992px)": {
        fontSize: "1.75em",
      },
      "@media (min-width: 1200px)": {
        fontSize: "1.80em",
      },
      "@media (min-width: 1900px)": {
        fontSize: "1.85em",
      },
    },
    h4: {
      fontSize: "1.4em",
      "@media (min-width: 480px)": {
        fontSize: "1.45em",
      },
      "@media (min-width: 768px)": {
        fontSize: "1.5em",
      },
      "@media (min-width: 992px)": {
        fontSize: "1.55em",
      },
      "@media (min-width: 1200px)": {
        fontSize: "1.60em",
      },
      "@media (min-width: 1900px)": {
        fontSize: "1.65em",
      },
    },
    h5: {
      fontSize: "1.2em",
      "@media (min-width: 480px)": {
        fontSize: "1.25em",
      },
      "@media (min-width: 768px)": {
        fontSize: "1.3em",
      },
      "@media (min-width: 992px)": {
        fontSize: "1.35em",
      },
      "@media (min-width: 1200px)": {
        fontSize: "1.4em",
      },
      "@media (min-width: 1900px)": {
        fontSize: "1.45em",
      },
    },
    h6: {
      fontSize: "1em",
      "@media (min-width: 480px)": {
        fontSize: "1.05em",
      },
      "@media (min-width: 768px)": {
        fontSize: "1.1em",
      },
      "@media (min-width: 992px)": {
        fontSize: "1.15em",
      },
      "@media (min-width: 1200px)": {
        fontSize: "1.2em",
      },
      "@media (min-width: 1900px)": {
        fontSize: "1.25em",
      },
    },
    body1: {
      fontSize: ".9em",
      "@media (min-width: 480px)": {
        fontSize: ".92em",
      },
      "@media (min-width: 768px)": {
        fontSize: ".94em",
      },
      "@media (min-width: 992px)": {
        fontSize: ".96m",
      },
      "@media (min-width: 1200px)": {
        fontSize: ".98em",
      },
    },
    body2: {
      fontSize: ".9em",
      "@media (min-width: 480px)": {
        fontSize: ".92em",
      },
      "@media (min-width: 768px)": {
        fontSize: ".94em",
      },
      "@media (min-width: 992px)": {
        fontSize: ".96m",
      },
      "@media (min-width: 1200px)": {
        fontSize: ".98em",
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
          textTransform: "none",
          fontSize: ".8em",
          "& .MuiSvgIcon-root": {
            fontSize: "8.em",
          },
          "@media (min-width: 480px)": {
            fontSize: ".85em",
            "& .MuiSvgIcon-root": {
              fontSize: "85.em",
            },
          },
          "@media (min-width: 768px)": {
            fontSize: ".9em",
          },
          "@media (min-width: 992px)": {
            fontSize: ".95m",
          },
          "@media (min-width: 1200px)": {
            fontSize: "1.05em",
          },
          "@media (min-width: 1900px)": {
            fontSize: "1em",
          },
        },
      },
    },
  },
});
