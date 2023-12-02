"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import "@/services/axios";
import { useRouter } from "next/navigation";

import { TextFieldControl } from "@/components/ControllerForm";
import { Update } from "@/services/user";
import { LoadingButton } from "@mui/lab";
import { Box, Grid, Paper, Typography } from "@mui/material";

const Confirm = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = async (form) => {
    setloading(true);
    const res = await Update(dispatch, { password: form.password });
    setloading(false);
    if (res) {
      setTimeout(() => {
        router.push("/sign-in");
      }, 2000);
      setDisabled(true);
    }
  };

  return (
    <>
      <Grid
        height={"100vh"}
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background:
            "linear-gradient(#ffffffe0,#000000e0),url(https://source.unsplash.com/featured/?technology)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          maxWidth={500}
        >
          <Paper elevation={10} sx={{ px: 3, width: "100%", pb: 4 }}>
            <Typography
              mt={4}
              textAlign={"center"}
              variant="h6"
              color="initial"
            >
              Escriba su nueva contraseña
            </Typography>
            <Box
              mt={3}
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
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
                errors={errors?.passwordConfirm}
                label="Confirmar contraseña"
              />
              <Grid display={"flex"} justifyContent={"center"}>
                <LoadingButton
                  loading={loading}
                  disabled={disabled}
                  sx={{ mt: 5, maxWidth: "300px" }}
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Modificar
                </LoadingButton>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Confirm;
