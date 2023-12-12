"use client";
import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { useRouter } from "next/navigation";

import { TextFieldControl } from "@/components/ControllerForm";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import { Checkbox, FormControlLabel } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { loginUser } from "../../services/login";
import { updateAlert } from "../store/features/alertSlice";

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignInSide() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(true);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  // Enviar datos
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    setLoading(true);
    const res = await loginUser(user, checked);
    setLoading(false);
    dispatch(updateAlert(res));
    if (res.type == "success") {
      setDisabled(true);
      setTimeout(() => router.push("/"), 2000);
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Grid container sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          md={7}
          xl={9}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/featured/?technology)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          sx={{
            display: "grid",
            alignContent: "center",
            width: "100%",
            backgroundRepeat: "no-repeat",
            background: {
              xs: "linear-gradient(#ffffffaa,#fff 95%),url(https://source.unsplash.com/featured/?technology)",
              md: "",
            },
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          item
          xs={12}
          md={5}
          xl={3}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              py: {},
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box display={"grid"} gap={1} alignContent={"center"}>
              <Avatar
                sx={{
                  mx: "auto",
                  bgcolor: "secondary.main",
                }}
              >
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Iniciar
              </Typography>
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 5, display: "grid", width: "100%", maxWidth: "400px" }}
            >
              <TextFieldControl
                control={control}
                errors={errors?.email}
                label={"Correo"}
                name={"email"}
                placeholder={"Ingrese su correo electronico"}
                autoFocus
                rules={{
                  required: { value: true, message: "Campo Requerido" },
                  pattern: {
                    value:
                      /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                    message: "Correo invalido",
                  },
                }}
              />
              <TextFieldControl
                control={control}
                name={"password"}
                type="password"
                rules={{
                  required: { value: true, message: "Campo Requerido" },
                  minLength: {
                    value: 8,
                    message: "La Contraseña debe de tener minimo 8 caracteres",
                  },
                }}
                errors={errors?.password}
                label="Contraseña"
                placeholder={"Ingrese su contraseña"}
              />

              <FormControlLabel
                sx={{ mt: 3, width: "fit-content" }}
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label="Mantener sesión"
              />
              <LoadingButton
                loading={loading}
                disabled={disabled}
                sx={{ mt: 8 }}
                type="submit"
                fullWidth
                variant="contained"
              >
                Iniciar sesión
              </LoadingButton>

              <Grid container justifyContent={"space-between"} mt={5}>
                <Grid item xs>
                  <Button
                    size="small"
                    style={{ fontSize: "14px", textTransform: "none" }}
                    onClick={() => router.push("/recovery-password")}
                    variant="text"
                  >
                    Olvido su contraseña?
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    size="small"
                    style={{ fontSize: "14px", textTransform: "none" }}
                    onClick={() => router.push("/sign-up")}
                    variant="text"
                  >
                    No tienes cuenta?
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
