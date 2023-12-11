"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { useRouter } from "next/navigation";

import { Delete } from "@/services/user";
import { Button, Grid, Popover, Typography } from "@mui/material";
const DeleteUser = () => {
  const [openPopover, setOpenPopover] = useState(null);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClose = () => {
    setOpenPopover(null);
  };

  const deleteUser = async () => {
    setOpenPopover(null);
    const res = await Delete(dispatch, router);
    if (res) {
      setTimeout(() => router.push("/sign-in"), 2000);
    }
  };

  const open = Boolean(openPopover);
  return (
    <>
      <Button
        onClick={handleClick}
        sx={{ mt: 2 }}
        variant="text"
        color="primary"
      >
        Eliminar Cuenta
      </Button>
      <Popover
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={openPopover}
        onClose={handleClose}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          Estas seguro de Eliminar su Cuenta?
        </Typography>
        <Grid mb={2} display={"flex"} justifyContent={"space-around"}>
          <Button onClick={handleClose} variant="text" color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => deleteUser()}
            variant="contained"
            color="primary"
          >
            Eliminar
          </Button>
        </Grid>
      </Popover>
    </>
  );
};
export default DeleteUser;
