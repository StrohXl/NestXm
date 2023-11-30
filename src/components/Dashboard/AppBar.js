import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { styled } from "@mui/material/styles";
const drawerWidth = 240;
import {
  Badge,
  IconButton,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Avatar,
  Grid,
} from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import MuiAppBar from "@mui/material/AppBar";
import { useSelector } from "react-redux";

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

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "#1976d2",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const AppBar = ({ open, toggleDrawer }) => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
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
    <AppBa position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <Grid
          width={"100%"}
          display={"flex"}
          justifyContent={open == true ? "flex-end" : "space-between"}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleClick} id="basic-button">
            <Avatar
              style={{ textTransform: "uppercase" }}
              {...stringAvatar(
                !user ? "" : `${user.firstName} ${user.lastName}`
              )}
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
            <MenuItem
              onClick={() => {
                handleClose, router.push("/user");
              }}
            >
              My cuenta
            </MenuItem>
            <MenuItem onClick={Logout}>Salir</MenuItem>
          </Menu>
        </Grid>
      </Toolbar>
    </AppBa>
  );
};
export default AppBar;
