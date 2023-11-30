"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { TextFieldControl } from "@/components/ControllerForm";
import { useForm } from "react-hook-form";
import { updateAlert } from "../store/features/alertSlice";
import { loginUser } from "../../services/login";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import ThemeProviders from "@/components/theme/themeProvider";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignInSide() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
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
    setTimeout(async () => {
      const res = await loginUser(user);
      setLoading(false);
      dispatch(updateAlert(res));
      if (res.type == "success") {
        setDisabled(true);
        setTimeout(() => router.push("/"), 2000);
      }
    }, 1000);
  };
  return (
    <ThemeProviders>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
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
          sx={{ display: "grid", alignContent: "center", width: "100%" }}
          item
          xs={12}
          sm={8}
          md={5}
          xl={3}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 10, display: "grid", width: "100%" }}
            >
              <TextFieldControl
                control={control}
                errors={errors?.email}
                label={"Correo Electronico"}
                name={"email"}
                rules={{
                  required: { value: true, message: "Campo Requerido" },
                  pattern: {
                    value:
                      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
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
    </ThemeProviders>
  );
}
