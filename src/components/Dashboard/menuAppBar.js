"use client";
// Mui Material
// React
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// Paquetes
import { updatedDrawerMobile } from "@/app/store/features/openDrawer";
import { Person } from "@mui/icons-material";
import IconLogout from "@mui/icons-material/Logout";
import {
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import StringAvatar from "../Avatar/stringAvatar";

const MenuAppBar = () => {
  const user = useSelector((state) => state.user.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(updatedDrawerMobile(false));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Logout = () => {
    setAnchorEl(null);
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <>
      <IconButton color="inherit" onClick={handleClick} id="basic-button">
        <StringAvatar
          props={{
            bgcolor: "#fff",
            color: "#9c27b0",
            fontSize: { xs: 15, md: 17, "2xl": 20 },
            height: { xs: 40, md: 45, "2xl": 50 },
            width: { xs: 40, md: 45, "2xl": 50 },
          }}
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Grid
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          px={5}
          mt={2}
        >
          <StringAvatar
            props={{
              bgcolor: "#9c27b0",
              color: "#fff",
              fontSize: { xs: 20, md: 22, "2xl": 24 },
              height: { xs: 60, md: 65, "2xl": 70 },
              width: { xs: 60, md: 65, "2xl": 70 },
            }}
          />
          <Grid width={"100%"} my={1} textAlign={"center"}>
            <Typography variant="h6">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography color={"darkgrey"} variant="body2">
              {user.email}
            </Typography>
          </Grid>
        </Grid>
        <MenuItem
          sx={{ mt: { xs: 1, md: 1.5, "2xl": 2 } }}
          onClick={() => {
            handleClose(), router.push("/user");
          }}
        >
          <ListItemIcon>
            <Person
              sx={{
                fontSize: { xs: 20, md: 25, "2xl": 30 },
                mr: { md: 1, "2xl": 2 },
              }}
              fontSize="small"
            />
          </ListItemIcon>
          Mi cuenta
        </MenuItem>
        <MenuItem onClick={Logout}>
          <ListItemIcon>
            <IconLogout
              sx={{
                fontSize: { xs: 20, md: 25, "2xl": 30 },
                mr: { md: 1, "2xl": 2 },
              }}
              fontSize="small"
            />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </>
  );
};
export default MenuAppBar;
