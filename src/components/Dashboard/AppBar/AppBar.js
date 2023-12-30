"use client";
import { useDispatch, useSelector } from "react-redux";

import {
  updatedDrawer,
  updatedDrawerMobile,
} from "@/app/store/features/openDrawer";
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

import MenuUser from "./Menus/MenuUser";
import MenuShoppingCart from "./Menus/MenuShoppingCart/index";
import Link from "next/link";

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
          justifyContent={"space-between"}
        >
          <Link href={"/"} style={{ textDecoration: "none", color: "#fff" }}>
            <Typography textTransform={"uppercase"} variant="h5">
              NestXM
            </Typography>
          </Link>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              display: { xs: mobileOpen && "none", md: "none" },
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: 28, md: 30, "2xl": 32 } }} />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              display: { xs: !mobileOpen && "none", md: "none" },
            }}
          >
            <Close sx={{ fontSize: { xs: 28, md: 30, "2xl": 32 } }} />
          </IconButton>

          <Grid
            display={{ xs: "none", md: "flex" }}
            gap={[0, 0.5]}
            alignItems={"center"}
          >
            <MenuShoppingCart />
            <MenuUser />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBa>
  );
};
export default AppBar;
