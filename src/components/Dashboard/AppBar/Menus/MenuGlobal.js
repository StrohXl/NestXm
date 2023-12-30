"use client";
import {
  updateAnchorEl,
  updateMenuShopping,
  updateMenuUser,
} from "@/app/store/features/openComponents";
import { FindIngredientsUser } from "@/services/user";
import { Menu } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MenuGlobal = ({ children, openMenu, type }) => {
  const dispatch = useDispatch();
  const anchorEl = useSelector((state) => state.components.anchorEl);
  const handleClose = () => {
    dispatch(updateAnchorEl(null));
    dispatch(updateMenuShopping(null));
    dispatch(updateMenuUser(null));
  };
  useEffect(() => {
    FindIngredientsUser(dispatch);
  }, []);
  return (
    <Menu
      onClose={handleClose}
      anchorEl={anchorEl}
      id="basic-menu"
      open={openMenu}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": type == "shopping" && {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {children}
    </Menu>
  );
};
export default MenuGlobal;
