"use client";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { updateErrorImage } from "@/app/store/features/formIngredient";
import { TextFieldControl } from "@/components/ControllerForm";
import { createIngredient, updateIngredient } from "@/services/ingredients";
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

import UploadImage from "../uploadImage";
import FormIngredientUseEffect from "./useEffect";

const FormIngredient = ({ type }) => {
  const router = useRouter();
  const image = useSelector((state) => state.ingredient.image);
  const idIngredient = useSelector((state) => state.ingredient.idIngredient);
  const onChangeInImage = useSelector(
    (state) => state.ingredient.onChangeInImage,
  );
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  FormIngredientUseEffect(type, dispatch, setValue);
  const onSubmit = async (form) => {
    dispatch(updateErrorImage(false));
    const formData = new FormData();
    formData.append("name", form.name);
    if (form.description) {
      formData.append("description", form.description);
    }
    formData.append("price", form.price);
    if (!image) {
      dispatch(updateErrorImage(true));
    } else {
      if (type == "create") {
        formData.append("image", image);
        const data = formData;
        const res = await createIngredient(dispatch, data);
        if (res === true) {
          setTimeout(() => {
            router.push("/ingredients");
          }, 1000);
        }
      } else {
        if (onChangeInImage == true) {
          formData.append("image", image);
        }
        const data = formData;
        const res = await updateIngredient(dispatch, data, idIngredient);
        if (res === true) {
          setTimeout(() => {
            router.push("/ingredients");
          }, 1000);
        }
      }
    }
  };

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
      <Paper sx={{ mx: 3, mt: 4, p: 3, maxWidth: 500, pt: 5 }}>
        <Box
          mb={2}
          mx="auto"
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <UploadImage />
          <TextFieldControl
            autoFocus
            control={control}
            label={"Nombre"}
            placeholder={"Ingrese el nombre del ingrediente"}
            errors={errors.name}
            name={"name"}
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
            placeholder={"Ingrese la descripción del ingrediente"}
            errors={errors.description}
            name={"description"}
          />
          <TextFieldControl
            control={control}
            label={"Precio"}
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
