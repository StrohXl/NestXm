"use client";

// Mui Material
import {
  Avatar,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";

// React
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// React Redux
import { useDispatch, useSelector } from "react-redux";
import { updateAlert } from "../store/features/alertSlice";
import {
  updateLoading1,
  updateDisabled1,
} from "../store/features/propertyButtonSlice";

// Services
import { SendEmail } from "@/services/confirmuser";
import { FindAllEmails } from "../../services/user";
import { useForm, Controller, set } from "react-hook-form";

// Components
import { TextFieldControl } from "@/components/ControllerForm";
import ThemeProviders from "@/components/theme/themeProvider";

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
    if ((res.type = "success")) {
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
    <ThemeProviders>
      <Grid
        container
        component="main"
        alignContent={"center"}
        display={"flex"}
        justifyContent={"center"}
        style={{
          height: "100%",
          background:
            "linear-gradient(#ffffffe0,#000000), url(https://source.unsplash.com/random?.keys)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid maxWidth={550}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inscribirse
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 5, px: 2 }}
            >
              <TextFieldControl
                control={control}
                name={"firstName"}
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
              <TextFieldControl
                control={control}
                name={"password"}
                type="password"
                rules={{
                  required: { value: true, message: "Campo Requerido" },
                  minLength: {
                    value: 8,
                    message: "La Contrasen debe de tener minimo 8 caracteres",
                  },
                }}
                errors={errors?.password}
                label="Contrasena"
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
        </Grid>
      </Grid>
    </ThemeProviders>
  );
}
