"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { useRouter } from "next/navigation";

import { TextFieldControl } from "@/components/ControllerForm";
import { ConfirEmail } from "@/services/confirmuser";
import { ArrowBack } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Grid, Typography, IconButton, Paper } from "@mui/material";

import { updateAlert } from "../store/features/alertSlice";

const RecoveryPassword = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    setLoading(true);
    const res = await ConfirEmail({ email: formData.email });
    setLoading(false);
    dispatch(updateAlert(res));
    if (res.type === "success") {
      setDisabled(true);
    }
  };

  return (
    <>
      <Grid
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        sx={{
          backgroundImage:
            "linear-gradient(#ffffffe0,#000000e0) , url(https://source.unsplash.com/featured/?technology)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        container
      >
        <IconButton
          onClick={() => router.push("/sign-in")}
          aria-label="regresar"
          sx={{ left: 0, marginTop: 4, marginLeft: 3, position: "absolute" }}
        >
          <ArrowBack />
        </IconButton>
        <Grid maxWidth={400} width={"100%"}>
          <Paper sx={{ px: "5%", py: 5 }} elevation={10}>
            <Typography
              variant="h1"
              sx={{ fontSize: "20px" }}
              textAlign={"center"}
              color="initial"
            >
              Recuperar
            </Typography>

            <Box
              component={"form"}
              noValidate
              pt={5}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextFieldControl
                control={control}
                autoFocus
                name={"email"}
                rules={{
                  required: { value: true, message: "Campo Requerido" },
                  pattern: {
                    value:
                      /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                    message: "Correo invalido",
                  },
                }}
                errors={errors?.email}
                label="Correo"
                placeholder={"Ingrese su correo electronico"}
              />
              <Grid display={"flex"} justifyContent={"center"}>
                <LoadingButton
                  loading={loading}
                  disabled={disabled}
                  fullWidth
                  sx={{ mt: 5, maxWidth: "250px" }}
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                  Enviar
                </LoadingButton>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default RecoveryPassword;
