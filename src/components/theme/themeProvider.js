"use client";
import { theme } from "@/../muiConfig";
import { ThemeProvider } from "@mui/material/styles";

const ThemeProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ThemeProviders;
