//Material
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Grid, IconButton, Toolbar } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
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
const drawerWidth = 240;

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "#1976d2",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const AppBar = ({ open, toggleDrawer }) => {
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
          <MenuAppBar />
        </Grid>
      </Toolbar>
    </AppBa>
  );
};
export default AppBar;
