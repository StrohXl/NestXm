"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Update } from "@/services/user";
import { Box, Grid, Paper, Button } from "@mui/material";

import { TextFieldControl } from "../ControllerForm";

const FormName = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  //Obtener usuario
  const user = useSelector((state) => state.user.user);
  //Enviar datos
  const onSubmit = async (form) => {
    const res = await Update(dispatch, form);
    if (res) {
      setTimeout(() => router.push("/user"), 2000);
    }
  };

  useEffect(() => {
    setValue("firstName", user.firstName);
    setValue("lastName", user.lastName);
  }, [user]);

  return (
    <Paper sx={{ mx: 3, mt: 4, p: 3, maxWidth: 500 }}>
      <Box component={"form"} noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextFieldControl
          control={control}
          errors={errors.name}
          label={"Nombre"}
          placeholder={"Ingrese su nombre"}
          name={"firstName"}
          required={true}
          autoFocus
        />
        <TextFieldControl
          control={control}
          errors={errors.lastName}
          label={"Apellido"}
          placeholder={"Ingrese su apellido"}
          name={"lastName"}
          required={true}
        />

        <Grid mt={4} display={"flex"} justifyContent={"flex-end"} gap={3}>
          <Link href={"/user"}>
            <Button variant="text" color="primary" type="submit">
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
export default FormName;
