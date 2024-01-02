"use client";
import { useDispatch } from "react-redux";

import {
  updateAnchorEl,
  updateMenuUser,
} from "@/app/store/features/openComponents";
import StringAvatar from "@/components/Avatar/stringAvatar";
import { IconButton } from "@mui/material";

const IconMenuUser = () => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(updateMenuUser(Boolean(event.currentTarget)));
    dispatch(updateAnchorEl(event.currentTarget));
  };
  return (
    <IconButton color="inherit" onClick={handleClick} id="basic-button">
      <StringAvatar
        props={{
          bgcolor: "#fff",
          color: "#9c27b0",
          fontSize: { xs: 15, md: 17, "2xl": 20 },
          height: { xs: 35, md: 37.5, "2xl": 40 },
          width: { xs: 35, md: 37.5, "2xl": 40 },
        }}
      />
    </IconButton>
  );
};
export default IconMenuUser;
