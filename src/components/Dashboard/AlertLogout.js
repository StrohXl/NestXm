"use client";
import { useEffect, useState } from "react";
import { Button, Grid, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useRouter } from "next/navigation";
import { Logout } from "@/services/login";
import { useDispatch, useSelector } from "react-redux";
import { updateAlertLogout } from "@/app/store/features/alertSlice";
const AlertLogout = () => {
  const open = useSelector((state) => state.alert.openAlertLogout);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(updateAlertLogout(false));
  };
  const router = useRouter();
  // Detectar inactividad
  let inactivityTimer;
  let logoutTime;
  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      dispatch(updateAlertLogout(true));
      clearTimeout(logoutTime);
      logoutTime = setTimeout(() => {
        Logout(router);
      }, 15000);
    }, 10000); // 60000 ms = 1 minuto
  }
  const Seguir = () => {
    if (logoutTime || inactivityTimer) {
      clearTimeout(inactivityTimer);
      clearTimeout(logoutTime);
      dispatch(updateAlertLogout(false));
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", resetInactivityTimer);
    document.addEventListener("keydown", resetInactivityTimer);
  });
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={10000}
      onClose={handleClose}
    >
      <MuiAlert
        severity="warning"
        sx={{ background: "#f5f5f5" }}
        auto
        elevation={6}
        variant="filled"
      >
        <Grid sx={{ color: "#000" }}>
          Desea seguir?
          <Grid container gap={2} marginTop={2}>
            <Button
              onClick={() => Seguir()}
              variant="contained"
              color="primary"
            >
              Seguir
            </Button>
            <Button
              onClick={() => {
                clearTimeout(logoutTime), Logout(router);
              }}
              variant="contained"
              color="primary"
            >
              Salir
            </Button>
          </Grid>
        </Grid>
      </MuiAlert>
    </Snackbar>
  );
};
export default AlertLogout;
