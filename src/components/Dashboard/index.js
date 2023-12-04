"use client";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { usePathname } from "next/navigation";

import AppBar from "@/components/Dashboard/AppBar";
import { FindOne } from "@/services/user";
import { ChevronLeft } from "@mui/icons-material";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

import ThemeProviders from "../theme/themeProvider";
import { MainListItems } from "./ListItem";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Dashboard({ children }) {
  const path = usePathname();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();
  const getUser = async () => {
    FindOne(dispatch);
  };
  useEffect(() => {
    getUser();
  });
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
          <AppBar open={open} toggleDrawer={toggleDrawer} />
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeft />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">{MainListItems()}</List>
          </Drawer>
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
            <Container sx={{ mx: 0, pl: 5 }}>
              <Toolbar />
              {children}
            </Container>
          </Box>
        </Box>
      </ThemeProviders>
    );
  }
}
