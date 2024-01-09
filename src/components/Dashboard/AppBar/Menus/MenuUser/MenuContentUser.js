"use client";
import { useDispatch, useSelector } from "react-redux";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { updateMenuUser } from "@/app/store/features/openComponents";
import StringAvatar from "@/components/Avatar/stringAvatar";
import { Logout, Person } from "@mui/icons-material";
import { Grid, ListItemIcon, MenuItem, Typography } from "@mui/material";

const MenuContentUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleClose = () => {
    dispatch(updateMenuUser(null));
  };
  const LogoutFuntion = () => {
    handleClose()
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <>
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
      <MenuItem onClick={LogoutFuntion}>
        <ListItemIcon>
          <Logout
            sx={{
              fontSize: { xs: 20, md: 25, "2xl": 30 },
              mr: { md: 1, "2xl": 2 },
            }}
            fontSize="small"
          />
        </ListItemIcon>
        Cerrar sesión
      </MenuItem>
    </>
  );
};
export default MenuContentUser;
