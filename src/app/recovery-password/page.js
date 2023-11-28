"use client";
import { TextFieldControl } from "@/components/ControllerForm";
import ThemeProviders from "@/components/theme/themeProvider";
import { Box, Grid, Typography, Button, Icon, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { ArrowBack } from "@mui/icons-material";
import { useForm, Controller, set } from "react-hook-form";

const recoveryPassword = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const router = useRouter();
  return (
    <ThemeProviders>
      <Grid
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        position={"relative"}
        container
      >
        <IconButton
          aria-label="regresar"
          onClick={() => router.push("/")}
          sx={{ position: "absolute", top: "5%", left: "10%" }}
        >
          <ArrowBack />
        </IconButton>
        <Grid maxWidth={400} width={"100%"} mt={30}>
          <Typography
            variant="h1"
            sx={{ fontSize: "20px" }}
            textAlign={"center"}
            color="initial"
          >
            Recuperar Contrasena
          </Typography>
          <Box component={"form"} px={2} pt={5}>
            <TextFieldControl
              control={control}
              name={"email"}
              rules={{
                required: { value: true, message: "Campo Requerido" },
                pattern: {
                  value:
                    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                  message: "Correo invalido",
                },
                validate: (email) => {
                  const validate = user.some((i) => i.email == email);
                  return !validate || "Ya existe un usuario con ese correo";
                },
              }}
              errors={errors?.email}
              label="Correo electronico"
            />
            <Grid display={"flex"} justifyContent={"center"}>
              <Button
                fullWidth
                sx={{ mt: 5, maxWidth: "250px" }}
                variant="contained"
                type="submit"
                color="primary"
              >
                Enviar
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProviders>
  );
};
export default recoveryPassword;
