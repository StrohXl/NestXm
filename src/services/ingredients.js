import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { isPagesAPIRouteMatch } from "next/dist/server/future/route-matches/pages-api-route-match";

import { updateAlert } from "@/app/store/features/alertSlice";
import { endPoints } from "@/services/routes";

import api from "./axios";
import { FindIngredientsUser } from "./user";
import { deleteProduct } from "@/app/store/features/shoppingCart";

const { ingredients } = endPoints;

export const deleteIngredient = async (dispatch, id) => {
  try {
    await api.delete(ingredients.delete(id));
    FindIngredientsUser(dispatch);
    dispatch(deleteProduct(id));
    dispatch(
      updateAlert({
        open: true,
        children: "Ingrediente Eliminado",
        type: "success",
      })
    );
  } catch (error) {
    dispatch(
      updateAlert({
        open: true,
        children: "hubo un error",
        type: "error",
      })
    );
  }
};

export const getOneIngredient = async (dispatch, id) => {
  try {
    const { data } = await api.get(ingredients.getOne(id));
    return data;
  } catch (error) {
    dispatch(
      updateAlert({
        open: true,
        children: "hubo un error",
        type: "error",
      })
    );
  }
};

export const createIngredient = async (dispatch, data) => {
  const token = Cookies.get("token");
  const { sub } = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_JWT);
  data.append("idUser", sub);
  const newIngredient = data;
  try {
    await api.post(ingredients.create, newIngredient);
    FindIngredientsUser(dispatch);
    dispatch(
      updateAlert({
        open: true,
        type: "success",
        children: "Ingrediente Creado",
      })
    );
    return true;
  } catch (error) {
    dispatch(
      updateAlert({
        open: true,
        type: "error",
        children: "Hubo un error",
      })
    );
  }
};

export const updateIngredient = async (dispatch, data, id) => {
  try {
    await api.patch(ingredients.update(id), data);
    FindIngredientsUser(dispatch);
    dispatch(
      updateAlert({
        open: true,
        type: "success",
        children: "Ingrediente Editado",
      })
    );
    return true;
  } catch (error) {
    dispatch(
      updateAlert({
        open: true,
        type: "error",
        children: "Hubo un error",
      })
    );
  }
};
