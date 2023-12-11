"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";

import { TextFieldControl } from "@/components/ControllerForm";
import { SendEmail } from "@/services/confirmuser";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Button,
  Paper,
} from "@mui/material";

import { FindAllEmails } from "../../services/user";
import { updateAlert } from "../store/features/alertSlice";
import { updateLoading1 } from "../store/features/propertyButtonSlice";

export default function SignUp() {
  const dispatch = useDispatch();
  const loading1 = useSelector((state) => state.button.loading1);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState([]);

  // Controlar Errores en el formulrio

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  // Funciones
  const onSubmit = (formData) => {
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    sendData(data);
  };

  const sendData = async (data) => {
    dispatch(updateLoading1());
    const res = await SendEmail(data);
    dispatch(updateLoading1());
    dispatch(updateAlert(res));
    if (res.type == "success") {
      setDisabled(true);
      setTimeout(() => router.push("/sign-up/confirm-user"), 2000);
    }
  };

  const getUsersEmail = async () => {
    const userEmails = await FindAllEmails();
    setUser(userEmails);
  };

  useEffect(() => {
    getUsersEmail();
  }, []);

  return (
    <>
      <Grid
        container
        component="main"
        alignContent={"center"}
        justifyContent={"center"}
        style={{
          height: "100%",
          background:
            "linear-gradient(#ffffffe0,#000000e0), url(https://images.unsplash.com/photo-1581089781785-603411fa81e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE3MDEyNzQ5MTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        sx={{ display: { xs: "block", md: "flex" } }}
      >
        <Grid sx={{ width: "100%", maxWidth: { md: "550px" } }} mx={"auto"}>
          <CssBaseline />
          <Paper
            elevation={10}
            sx={{
              py: 8,
              minHeight: { xs: "100vh", md: "auto" },
              display: { xs: "grid" },
              alignItems: "center",
              background: {
                xs: "linear-gradient(#ffffffaa,#fff 95%),url(https://images.unsplash.com/photo-1581089781785-603411fa81e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE3MDEyNzQ5MTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)",
                md: "#fff",
              },
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Avatar sx={{ bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Inscribirse
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 5, px: 2, maxWidth: { xs: "400px", md: "100%" } }}
              >
                <TextFieldControl
                  autoFocus
                  control={control}
                  name={"firstName"}
                  placeholder={"Ingrese su nombre"}
                  rules={{
                    required: { value: true, message: "Campo Requerido" },
                    pattern: {
                      value:
                        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
                      message: "No use números o caracteres especiales",
                    },
                    minLength: {
                      value: 3,
                      message: "El Nombre debe de tener minimo 3 caracteres",
                    },
                  }}
                  errors={errors?.firstName}
                  label="Nombre"
                />
                <TextFieldControl
                  control={control}
                  placeholder={"Ingrese su apellido"}
                  name={"lastName"}
                  rules={{
                    required: { value: true, message: "Campo Requerido" },
                    pattern: {
                      value:
                        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
                      message: "No use números o caracteres especiales",
                    },
                    minLength: {
                      value: 3,
                      message: "El Apellido debe de tener minimo 3 caracteres",
                    },
                  }}
                  errors={errors?.lastName}
                  label="Apellido"
                />
                <TextFieldControl
                  control={control}
                  name={"email"}
                  rules={{
                    required: { value: true, message: "Campo Requerido" },
                    pattern: {
                      value:
                        /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                      message: "Correo invalido",
                    },
                    validate: (email) => {
                      const validate = user.some((i) => i.email == email);
                      return !validate || "Ya existe un usuario con ese correo";
                    },
                  }}
                  errors={errors?.email}
                  label="Correo"
                  placeholder={"Ingrese su correo electronico"}
                />
                <TextFieldControl
                  control={control}
                  name={"password"}
                  type="password"
                  placeholder={"Ingrese su contraseña"}
                  rules={{
                    required: { value: true, message: "Campo Requerido" },
                    minLength: {
                      value: 8,
                      message:
                        "La Contraseña debe de tener minimo 8 caracteres",
                    },
                  }}
                  errors={errors?.password}
                  label="Contraseña"
                />
                <TextFieldControl
                  control={control}
                  name={"passwordConfirm"}
                  type="password"
                  rules={{
                    required: { value: true, message: "Campo Requerido" },
                    validate: (value) =>
                      control._fields.password._f.value === value ||
                      "Las contraseñas no coinciden",
                  }}
                  placeholder={"Confirme su contraseña"}
                  errors={errors?.passwordConfirm}
                  label="Confirmar contrasena"
                />

                <LoadingButton
                  loading={loading1}
                  type="submit"
                  fullWidth
                  disabled={disabled}
                  variant="contained"
                  sx={{ mt: 8, mb: 2 }}
                >
                  Seguir
                </LoadingButton>
                <Grid container justifyContent="flex-end">
                  <Grid item mt={4}>
                    <Button
                      onClick={() => router.push("/sign-in")}
                      size="small"
                      style={{ fontSize: "14px", textTransform: "none" }}
                      variant="text"
                      color="primary"
                      disableRipple
                    >
                      ¿Ya tienes una cuenta? Iniciar sesión
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
