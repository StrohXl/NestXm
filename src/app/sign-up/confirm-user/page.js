"use client";

// Components
import { ConfirmText } from "@/components/ControllerForm";

// Mui material
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

// React
import { useRef } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// React Redux
import { useDispatch, useSelector } from "react-redux";
import { updateAlert } from "@/app/store/features/alertSlice";

// otros
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import Cookies from "js-cookie";
import ThemeProviders from "@/components/theme/themeProvider";
import { ConfirmToken, ResendEmail } from "@/services/confirmuser";
import { LoadingButton } from "@mui/lab";

const ConfirmUser = () => {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
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
    const data = [
      formData.number1,
      formData.number2,
      formData.number3,
      formData.number4,
      formData.number5,
    ];
    for (let index = 0; index < data.length; index++) {
      let text = data[index];
      text = text.slice(0, text.length - 1);
      data[index] = text;
    }
    const token = data.join("");
    sendData(token);
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

  async function resendToken(e) {
    const idEmail = Cookies.get("email");
    const res = await ResendEmail(idEmail);
    dispatch(updateAlert(res))
  }

  return (
    <ThemeProviders>
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
        <Paper elevation={10} sx={{ pb: 8, px:'5%',  maxWidth: "500px" }}>
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
              sx={{ mt: 10, textAlign: "center" }}
            >
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
                  <ConfirmText
                    inputRef={input1}
                    control={control}
                    name={"number1"}
                    rules={{
                      required: { value: true, message: "" },
                    }}
                    errors={errors?.number1}
                    label="1"
                    onKeyDown={() => null}
                  />
                  <ConfirmText
                    inputRef={input2}
                    control={control}
                    name={"number2"}
                    rules={{
                      required: { value: true, message: "" },
                    }}
                    errors={errors?.number2}
                    label="2"
                    onKeyDown={() => null}
                  />
                  <ConfirmText
                    inputRef={input3}
                    control={control}
                    name={"number3"}
                    rules={{
                      required: { value: true, message: "" },
                    }}
                    errors={errors?.number3}
                    label="3"
                    onKeyDown={() => null}
                  />
                  <ConfirmText
                    inputRef={input4}
                    control={control}
                    name={"number4"}
                    rules={{
                      required: { value: true, message: "" },
                    }}
                    errors={errors?.number4}
                    label="4"
                    onKeyDown={() => null}
                  />
                  <ConfirmText
                    inputRef={input5}
                    control={control}
                    name={"number5"}
                    rules={{
                      required: { value: true, message: "" },
                    }}
                    onKeyDown={() => null}
                    errors={errors?.number5}
                    label="5"
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
                sx={{ mt: 4, mb: 2 }}
              >
                Confirmar
              </LoadingButton>
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProviders>
  );
};
export default ConfirmUser;
