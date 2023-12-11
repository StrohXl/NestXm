"use client";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { updateAlert } from "@/app/store/features/alertSlice";
import { TextFieldControl } from "@/components/ControllerForm";
import { ConfirmToken, ResendEmail } from "@/services/confirmuser";
import { ArrowBack } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

const ConfirmUser = () => {
  const buttonRef = useRef(null);

  const [disabledButton, setDisabledButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();
  // Controlar Errores en el formulrio

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (formData) => {
    const data = formData.token;
    sendData(data);
  };

  const sendData = async (token) => {
    setLoading(true);
    const idEmail = Cookies.get("email");
    const data = {
      id: idEmail,
      token,
    };
    setTimeout(async () => {
      const res = await ConfirmToken(data);
      setLoading(false);
      dispatch(updateAlert(res));
      if (res.type == "success") {
        setDisabledButton(true);
        setTimeout(() => {
          router.push("/sign-in");
        }, 2000);
      }
    }, 1000);
  };

  useEffect(() => {}, []);

  // Reenviar token

  async function resendToken() {
    const idEmail = Cookies.get("email");
    const res = await ResendEmail(idEmail);
    dispatch(updateAlert(res));
  }

  return (
    <>
      <IconButton
        onClick={() => router.push("/sign-up")}
        aria-label="regresar"
        sx={{ marginTop: 4, marginLeft: 3, position: "absolute" }}
      >
        <ArrowBack />
      </IconButton>
      <Box
        sx={{ display: "flex", placeItems: "center", justifyContent: "center" }}
        style={{
          height: "100%",
          background:
            "linear-gradient(#ffffffe0,#000000e0), url(https://images.unsplash.com/photo-1504270997636-07ddfbd48945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE3MDEyNzQ4OTk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Paper elevation={10} sx={{ pb: 8, px: "5%", maxWidth: "500px" }}>
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              margin: "auto",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography component="h1" variant="h5" sx={{ marginTop: 10 }}>
              Confirmar codigo
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 5, textAlign: "center" }}
            >
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
                  <TextFieldControl
                    control={control}
                    name={"token"}
                    type="text"
                    placeholder={""}
                    rules={{
                      required: { value: true, message: "Campo Requerido" },
                      minLength: {
                        value: 5,
                        message: "El codigo debe de tener 5 caracteres",
                      },
                      maxLength: {
                        value: 5,
                        message:
                          "El codigo debe de tener un maximo 5 caracteres",
                      },
                    }}
                    variant={"standard"}
                    errors={errors?.token}
                    label=""
                  />
                </Grid>
              </Grid>
              <Button
                style={{ fontSize: "14px", textTransform: "none" }}
                small
                onClick={(e) => resendToken(e)}
                variant="text"
              >
                Reenviar token
              </Button>

              <LoadingButton
                loading={loading}
                ref={buttonRef}
                type="submit"
                fullWidth
                disabled={disabledButton}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Confirmar
              </LoadingButton>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
export default ConfirmUser;
