"use client";

import { useSelector } from "react-redux";

const { Backdrop, CircularProgress } = require("@mui/material");

const MuiBackdrop = () => {
  const open = useSelector((state) => state.components.openBackdrop);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};
export default MuiBackdrop;
