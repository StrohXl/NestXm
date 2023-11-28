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

// otros
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import Cookies from "js-cookie";
import ThemeProviders from "@/components/theme/themeProvider";


const ConfirmUser = () => {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
  const buttonRef = useRef(null);

  const [disabledButton, setDisabledButton] = useState(false);
  const router = useRouter();
  const [errorAlert, setErrorAlert] = useState({
    active: false,
    text: "",
    type: "",
  });

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
    const idEmail = Cookies.get("email");
    const data = {
      id: idEmail,
      token,
    };
    try {
      const res = await axios.post("http://localhost:8000/confirm-user", data);
      console.log(res);
      setDisabledButton(true);
      setErrorAlert({
        ...errorAlert,
        text: res?.data.message,
        active: true,
        type: "success",
      });
      setTimeout(() => {
        router.push("/sign-in");
      }, 2000);
    } catch (error) {
      console.log(error);
      setErrorAlert({
        ...errorAlert,
        text: error?.response?.data?.message,
        active: true,
        type: "error",
      });
    }
  };

  useEffect(() => {}, []);

  // Reenviar token

  async function resendToken(e) {
    e.preventDefault();
    const idEmail = Cookies.get("email");
    console.log(idEmail);
    try {
      const res = await axios.patch(
        `http://localhost:8000/confirm-user/${idEmail}`
      );
      co
      
      
      
      nsole.log(res);
      setErrorAlert({
        text: "Se ha enviado un token de confirmacion a su correo",
        active: true,
        type: "success",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ThemeProviders>
      <IconButton
        onClick={() => router.push("/sign-up")}
        aria-label="regresar"
        sx={{ marginTop: 4, marginLeft: 3 }}
      >
        <ArrowBack />
      </IconButton>

      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
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
                onKeyDown={() => {
                  input2.current.focus();
                }}
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
                onKeyDown={() => input3.current.focus()}
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
                onKeyDown={() => input4.current.focus()}
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
                onKeyDown={() => input5.current.focus()}
              />
              <ConfirmText
                inputRef={input5}
                control={control}
                name={"number5"}
                rules={{
                  required: { value: true, message: "" },
                }}
                onKeyDown={() => buttonRef.current.focus()}
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

          <Button
            ref={buttonRef}
            type="submit"
            fullWidth
            disabled={disabledButton}
            variant="contained"
            sx={{ mt: 4, mb: 2 }}
          >
            Confirmar
          </Button>
        </Box>
      </Box>
    </ThemeProviders>
  );
};
export default ConfirmUser;
