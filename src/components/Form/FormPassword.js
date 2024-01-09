"use client";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Update } from "@/services/user";
import { Box, Grid, Paper, Button, Typography } from "@mui/material";

import { TextFieldControl } from "../ControllerForm";

const FormPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  //Enviar datos
  const onSubmit = async (form) => {
    const res = await Update(dispatch, { password: form.password });
    if (res) {
      setTimeout(() => router.push("/user"), 2000);
    }
  };

  return (
    <Paper sx={{ mx: 3, mt: 4, p: 3, maxWidth: 500 }}>
      <Typography my={2} variant="h4" textAlign={"center"}>
        Ingrese su nueva contrasena
      </Typography>
      <Box component={"form"} noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextFieldControl
          control={control}
          errors={errors.password}
          label={"Contraseña"}
          rules={{
            required: { value: true, message: "Campo Requerido" },
            minLength: {
              value: 8,
              message: "La Contrasen debe de tener minimo 8 caracteres",
            },
          }}
          placeholder={"Ingrese su contraseña"}
          name={"password"}
          required={true}
        />
        <TextFieldControl
          control={control}
          errors={errors.confirmPassword}
          label={"Confirmar Contraseña"}
          placeholder={"Confirme su Contraseña"}
          type={"password"}
          name={"confirmPassword"}
          required={true}
          rules={{
            required: { value: true, message: "Campo Requerido" },
            validate: (value) =>
              control._fields.password._f.value === value ||
              "Las contraseñas no coinciden",
          }}
        />

        <Grid mt={4} display={"flex"} justifyContent={"flex-end"} gap={3}>
          <Link href={"/user"}>
            <Button variant="outlined" color="primary">
              Cancelar
            </Button>
          </Link>
          <Button variant="contained" color="primary" type="submit">
            Guardar
          </Button>
        </Grid>
      </Box>
    </Paper>
  );
};
export default FormPassword;
