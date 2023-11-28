"use client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/../muiConfig";

const ThemeProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ThemeProviders;
