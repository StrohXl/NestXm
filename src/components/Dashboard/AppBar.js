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
          sx={{ justifyContent: { xs: "space-between", md: "flex-end" } }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              display: { md: "none" },
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: 28, md: 30, "2xl": 32 } }} />
          </IconButton>

          <MenuAppBar />
        </Grid>
      </Toolbar>
    </AppBa>
  );
};
export default AppBar;
