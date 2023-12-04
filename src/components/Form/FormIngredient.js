"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { TextFieldControl } from "@/components/ControllerForm";
import {
  updateIngredient,
  getOneIngredient,
  createIngredient,
} from "@/services/ingredients";
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

const FormIngredient = ({ type }) => {
  const [ingredient, setIngredient] = useState([]);
  const [id, setId] = useState();
  const params = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const onSubmit = async (form) => {
    if (type == "create") {
      const res = await createIngredient(dispatch, form);
      if (res === true) {
        setTimeout(() => {
          router.push("/ingredients");
        }, 1000);
        setIngredient([]);
      }
    } else {
      const res = await updateIngredient(dispatch, form, id);
      if (res === true) {
        setTimeout(() => {
          router.push("/ingredients");
        }, 1000);
        setIngredient([]);
      }
    }
  };

  async function getIngredient(idQuery) {
    const data = await getOneIngredient(dispatch, idQuery);
    setValue("name", data.name);
    setValue("description", data.description);
    setValue("price", data.price);
    if (!data) {
      router.push("/ingredients");
    } else {
      setTimeout(() => setIngredient(data), 2000);
    }
  }

  useEffect(() => {
    if (type != "create") {
      const idQuery = params.get("id");
      if (!idQuery) {
        router.push("/ingredients");
      } else {
        setId(idQuery);
        getIngredient(idQuery);
      }
    }
  }, []);

  return (
    <>
      <Grid display={"flex"} gap={2} alignItems={"center"}>
        <Link href={"/ingredients"}>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography variant="h5">
          {`${type === "create" ? "Agregar " : "Editar"} Ingrediente`}
        </Typography>
      </Grid>
      <Paper sx={{ mx: 3, mt: 4, p: 3, maxWidth: 500 }}>
        <Box
          mb={2}
          mx="auto"
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <TextFieldControl
            autoFocus
            control={control}
            label={"Nombre"}
            placeholder={"Ingrese el nombre del ingrediente"}
            errors={errors.name}
            name={"name"}
            defaultValue={ingredient?.name}
            rules={{
              required: { value: true, message: "Campo Requerido" },
              minLength: {
                value: 5,
                message: "El nombre debe de tener minimo de 5 caracteres",
              },
            }}
            required={true}
          />
          <TextFieldControl
            control={control}
            label={"Descripción"}
            defaultValue={ingredient?.description}
            placeholder={"Ingrese la descripción del ingrediente"}
            errors={errors.description}
            name={"description"}
          />
          <TextFieldControl
            control={control}
            label={"Precio"}
            defaultValue={ingredient?.price}
            placeholder={"Ingrese el precio del ingrediente"}
            errors={errors.price}
            name={"price"}
            type={"number"}
            required={true}
            rules={{
              required: { value: true, message: "Campo Requerido" },
              validate: (value) => value > 0 || "El precio minimo es de 1",
            }}
          />
          <Grid mt={5} gap={3} display={"flex"} justifyContent={"flex-end"}>
            <Link href={"/ingredients"}>
              <Button variant="text">Cancelar</Button>
            </Link>
            <LoadingButton type="submit" variant="contained">
              {type == "create" ? "Guardar" : "Editar"}
            </LoadingButton>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};
export default FormIngredient;
