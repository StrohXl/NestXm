"use client";
import * as React from "react";

import { usePathname } from "next/navigation";

import AppBar from "@/components/Dashboard/AppBar";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import ThemeProviders from "../theme/themeProvider";
import Drawers from "./Drawer";
export default function Dashboard({ children }) {
  const path = usePathname();

  if (
    path === "/sign-in" ||
    path === "/sign-up" ||
    path.includes("sign-up") ||
    path.includes("recovery-password")
  ) {
    return <ThemeProviders>{children}</ThemeProviders>;
  } else {
    return (
      <ThemeProviders>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar />
          <Drawers />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container sx={{ mx: 0, px: { xs: 1, sm: 3, md: 5 } }}>
              <Toolbar />
              {children}
            </Container>
          </Box>
        </Box>
      </ThemeProviders>
    );
  }
}
