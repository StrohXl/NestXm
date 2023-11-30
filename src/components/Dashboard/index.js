'use client'
import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AppBar from "@/components/Dashboard/AppBar";
import { ChevronLeft } from "@mui/icons-material";
import { MainListItems, secondaryListItems } from "./ListItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Container, Grid } from "@mui/material";
import Cookies from "js-cookie";
import { Alert } from "../Alert";
import ThemeProviders from "../theme/themeProvider";

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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const GroupButtonInactivity = ({ logout, login }) => {
  return (
    <div>
      Desea seguir?
      <Grid container gap={2} marginTop={2}>
        <Button onClick={() => login()} variant="contained" color="primary">
          Seguir
        </Button>
        <Button onClick={() => logout()} variant="contained" color="primary">
          Salir
        </Button>
      </Grid>
    </div>
  );
};

export default function Dashboard({ children }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(true);
  const [alert, setAlert] = React.useState({
    text: "",
    open: false,
    type: "",
    vertical: "",
    horizontal: "",
    time: 0,
  });
  const [userLogin, setUserLogin] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Detectar inactividad
  let inactivityTimer;
  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(runAfterInactivity, 60000); // 60000 ms = 1 minuto
  }
  function runAfterInactivity() {
    setAlert({
      text: (
        <GroupButtonInactivity
          logout={() => Logout()}
          login={() => {
            clearTimeout(logoutTime);
            setAlert({ ...alert, open: false });
          }}
        />
      ),
      open: true,
      type: "warning",
      vertical: "top",
      horizontal: "center",
      time: 10000,
    });
    const logoutTime = setTimeout(() => {
      Logout();
    }, 10000);
  }

  // Cerrar sesion

  const Logout = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };

  useEffect(() => {
    document.addEventListener("mousemove", ()=>resetInactivityTimer());
    document.addEventListener("keydown", ()=>resetInactivityTimer());
  });

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
          <List component="nav">
            {MainListItems()}
       
          </List>
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </ThemeProviders>
  );
}
