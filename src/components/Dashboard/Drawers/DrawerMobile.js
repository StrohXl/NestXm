import {
  updatedDrawer,
  updatedDrawerMobile,
} from "@/app/store/features/openDrawer";
import StringAvatar from "@/components/Avatar/stringAvatar";
import {
  Divider,
  Drawer,
  Grid,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainListItems, SecondaryMainListItems } from "./ListItem";

function DrawerMobile() {
  const user = useSelector((state) => state.user.user);
  const mobileOpen = useSelector((state) => state.drawer.openDrawerMobile);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.drawer.openDrawer);
  const handleDrawerToggle = () => {
    dispatch(updatedDrawerMobile(!mobileOpen));
    dispatch(updatedDrawer(!open));
  };
  return (
    <Drawer
      sx={{
       
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          pb: 2,
          boxSizing: "border-box",
        },
      }}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      anchor="top"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      ></Toolbar>
      <Grid
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        my={{ xs: 2, sm: 3 }}
        alignItems={"center"}
      >
        <Link href={"/user"} onClick={handleDrawerToggle}>
          <StringAvatar
            props={{
              bgcolor: "#9c27b0",
              cursor: "pointer",
              color: "#fff",
              mb: { xs: 1 },
              height: { xs: 80, sm: 120 },
              width: { xs: 80, sm: 120 },
              fontSize: 25,
            }}
          />
        </Link>
        <Typography component={"h1"} variant="h5">
          {user.firstName} {user.lastName}
        </Typography>
      </Grid>
      <Divider />
      <List component="nav" sx={{ mt: 1 }}>
        <MainListItems mobile={true} />
      </List>
    </Drawer>
  );
}

export default DrawerMobile;
