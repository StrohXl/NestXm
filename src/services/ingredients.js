import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { isPagesAPIRouteMatch } from "next/dist/server/future/route-matches/pages-api-route-match";

import { updateAlert } from "@/app/store/features/alertSlice";
import { endPoints } from "@/services/routes";

import { FindIngredientsUser } from "./user";

const { ingredients } = endPoints;

export const deleteIngredient = async (dispatch, id) => {
  try {
    await axios.delete(ingredients.delete(id));
    FindIngredientsUser(dispatch);
    dispatch(
      updateAlert({
        open: true,
        children: "Ingrediente Eliminado",
        type: "success",
      }),
    );
  } catch (error) {
    dispatch(
      updateAlert({
        open: true,
        children: "hubo un error",
        type: "error",
      }),
    );
  }
};

export const getOneIngredient = async (dispatch, id) => {
  try {
    const { data } = await axios.get(ingredients.getOne(id));
    return data;
  } catch (error) {
    dispatch(
      updateAlert({
        open: true,
        children: "hubo un error",
        type: "error",
      }),
    );
  }
};

export const createIngredient = async (dispatch, data) => {
  const token = Cookies.get("token");
  const { sub } = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_JWT);
  const newIngredient = { ...data, idUser: sub };
  try {
    await axios.post(ingredients.create, newIngredient);
    FindIngredientsUser(dispatch);
    dispatch(
      updateAlert({
        open: true,
        type: "success",
        children: "Ingrediente Creado",
      }),
    );
    return true;
  } catch (error) {
    dispatch(
      updateAlert({
        open: true,
        type: "error",
        children: "Hubo un error",
      }),
    );
  }
};

export const updateIngredient = async (dispatch, data, id) => {
  try {
    await axios.patch(ingredients.update(id), data);
    FindIngredientsUser(dispatch);
    dispatch(
      updateAlert({
        open: true,
        type: "success",
        children: "Ingrediente Editado",
      }),
    );
    return true;
  } catch (error) {
    console.log(error);
    dispatch(
      updateAlert({
        open: true,
        type: "error",
        children: "Hubo un error",
      }),
    );
  }
};
