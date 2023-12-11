"use client";
import { useDispatch, useSelector } from "react-redux";

import {
  updatedDrawer,
  updatedDrawerMobile,
} from "@/app/store/features/openDrawer";
import { ChevronLeft } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, IconButton, Toolbar } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

import MenuAppBar from "./menuAppBar";

// React

const AppBa = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const drawerWidth = 0;

const AppBar = () => {
  const open = useSelector((state) => state.drawer.openDrawer);
  const mobileOpen = useSelector((state) => state.drawer.openDrawerMobile);
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch(updatedDrawer(!open));
  };
  const toggleDrawerMobile = () => {
    dispatch(updatedDrawerMobile(!mobileOpen));
  };

  return (
    <AppBa position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <Grid
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawerMobile}
            sx={{
              marginRight: "36px",
              height: "40px",
              display: { xs: "block", sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              height: "40px",
              display: { xs: "none", sm: open ? "none" : "block" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            edge="start"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              height: "40px",
              display: { xs: "none", sm: !open ? "none" : "block" },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <MenuAppBar />
        </Grid>
      </Toolbar>
    </AppBa>
  );
};
export default AppBar;
