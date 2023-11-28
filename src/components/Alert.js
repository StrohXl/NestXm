"use client";
import React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { closeAlert } from "@/app/store/features/alertSlice";
import { useState } from "react";
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
        children={propsAlert.children}
        severity={propsAlert.type}
        auto
        elevation={6}
        variant="filled"
      />
    </Snackbar>
  );
};
