"use client";
// Mui Material
// React
import { useState } from "react";
import { useSelector } from "react-redux";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// Paquetes
import { Person } from "@mui/icons-material";
import IconLogout from "@mui/icons-material/Logout";
import {
  Avatar,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "#fff",
      color: "#9c27b0",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const MenuAppBar = () => {
  const user = useSelector((state) => state.user.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
        <Avatar
          style={{ textTransform: "uppercase", fontSize: "13px" }}
          {...stringAvatar(!user ? "" : `${user.firstName} ${user.lastName}`)}
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
          <Avatar
            style={{
              textTransform: "uppercase",
              width: "60px",
              height: "60px",
              border: "3px solid #9c27b0",
            }}
            {...stringAvatar(!user ? "" : `${user.firstName} ${user.lastName}`)}
          />
          <Grid width={"100%"} my={1} textAlign={"center"}>
            <Typography variant="body1">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography color={"darkgrey"} variant="caption">
              {user.email}
            </Typography>
          </Grid>
        </Grid>
        <MenuItem
          onClick={() => {
            handleClose, router.push("/user");
          }}
        >
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          Mi cuenta
        </MenuItem>
        <MenuItem onClick={Logout}>
          <ListItemIcon>
            <IconLogout fontSize="small" />
          </ListItemIcon>
          Salir
        </MenuItem>
      </Menu>
    </>
  );
};
export default MenuAppBar;
