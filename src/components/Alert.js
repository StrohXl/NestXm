"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeAlert } from "@/app/store/features/alertSlice";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

export const Alert = () => {
  const dispatch = useDispatch();
  const propsAlert = useSelector((state) => state.alert);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(closeAlert(false));
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: propsAlert.vertical,
        horizontal: propsAlert.horizontal,
      }}
      open={propsAlert.open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <MuiAlert
        style={{ backgroundColor: propsAlert.type == "success" && "#9c27b0" }}
        severity={propsAlert.type}
        auto
        elevation={6}
        variant="filled"
      >
        {propsAlert.children}
      </MuiAlert>
    </Snackbar>
  );
};
