import * as React from "react";
import { useDispatch } from "react-redux";

import { useRouter, usePathname } from "next/navigation";

import {
  updatedDrawer,
  updatedDrawerMobile,
} from "@/app/store/features/openDrawer";
import { items } from "@/helpers/ListItems";
import { Divider, styled } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Cookies from "js-cookie";
import { Logout } from "@mui/icons-material";

const ListItemIconStyled = styled(ListItemIcon)(({ path, index, link }) => ({
  "& .MuiSvgIcon-root": {
    fontSize: 28,
    color:
      index == 0 ? path == "/" && "#ba68c8" : path.includes(link) && "#ba68c8",
    "@media (min-width: 768px)": {
      fontSize: 30,
    },
    "@media (min-width: 1920px)": {
      fontSize: 32,
    },
  },
}));

export const MainListItems = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const path = usePathname();

  const changeUrl = (link) => {
    router.push(link);
    dispatch(updatedDrawer(false));
    dispatch(updatedDrawerMobile(false));
  };
  const LogoutFuntion = () => {
    dispatch(updatedDrawerMobile(false));
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <>
      {items.map((i, index) => {
        return (
          <>
            <ListItemButton
              selected={index == 0 ? path == i.link : path.includes(i.link)}
              key={index}
              onClick={() => changeUrl(i.link)}
              sx={{ pl: 2.6 }}
            >
              <ListItemIconStyled path={path} link={i.link} index={index}>
                {i.icon}
              </ListItemIconStyled>
              <ListItemText primary={i.name} />
            </ListItemButton>

            {index == 3 && <Divider sx={{ my: 2 }} />}
          </>
        );
      })}
      <Divider sx={{ my: 2 }} />
      <ListItemButton sx={{ pl: 2.6 }} onClick={LogoutFuntion}>
        <ListItemIcon>
          <Logout sx={{ fontSize: { xs: 28, md: 30, "2xl": 32 } }} />
        </ListItemIcon>
        <ListItemText primary={"Cerrar sesion"} />
      </ListItemButton>
    </>
  );
};
