import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

import "dotenv/config";
import { updateAlert } from "@/app/store/features/alertSlice";
import {
  updatedUserIngredient,
  updateTableLength,
  getUser,
  updatedUserSolicitudes,
} from "@/app/store/features/dataUser";
import { updateBackdrop } from "@/app/store/features/openComponents";

import api from "./axios";
import { endPoints } from "./routes";

const { user } = endPoints;
const {
  create,
  getAll,
  getOne,
  update,
  delete: DeleteUser,
  getAllEmail,
  getIngredientsUser,
  getSolicitudesUser,
} = user;

export const FindAll = async (query) => {
  const data = await axios.get(getAll(query));
  return data;
};

export const FindAllEmails = async () => {
  try {
    const { data } = await axios.get(getAllEmail);
    return data;
  } catch (error) {
    return error;
  }
};

export const Post = async (user) => {
  const data = await axios.post(create, user);
  return data;
};

export const FindOne = async (dispatch) => {
  const token = Cookies.get("token");
  try {
    const { sub } = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_JWT);
    const { data } = await api.get(getOne(sub));
    dispatch(getUser(data));
    setTimeout(() => dispatch(updateBackdrop(false)), 2000);
    return data;
  } catch (error) {
    return error;
  }
};

export const Update = async (dispatch, body) => {
  const confirmEmail = Cookies.get("confirmEmail");
  const token = Cookies.get("token");
  try {
    const { sub } = jwt.verify(
      confirmEmail ? confirmEmail : token,
      process.env.NEXT_PUBLIC_SECRET_JWT,
    );
    await api.patch(update(sub), body);
    if (confirmEmail) {
      Cookies.remove("confirmEmail");
      Cookies.remove("confirm");
    }
    dispatch(
      updateAlert({
        type: "success",
        open: true,
        children: "Cambios realizados",
      }),
    );

    return true;
  } catch (error) {
    dispatch(
      updateAlert({
        type: "error",
        open: true,
        children: "Hubo un error intentenlo mas tarde",
      }),
    );
    return false;
  }
};

export const Delete = async (dispatch) => {
  const token = Cookies.get("token");
  const { sub } = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_JWT);
  const id = sub;
  try {
    const { data } = await api.delete(DeleteUser(id));
    Cookies.remove("token");
    dispatch(
      updateAlert({
        type: "success",
        open: true,
        children: data,
      }),
    );
    return true;
  } catch (error) {
    dispatch(
      updateAlert({
        type: "success",
        open: true,
        children: error?.response?.data?.message,
      }),
    );
  }
};

// get Ingredients User

export const FindIngredientsUser = async (dispatch) => {
  const token = Cookies.get("token");
  try {
    const { sub } = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_JWT);
    const { data } = await api.get(getIngredientsUser(sub));
    dispatch(updatedUserIngredient(data));
    dispatch(updateTableLength(data.length));
  } catch (error) {
    dispatch(
      updateAlert({
        type: "error",
        open: true,
        children: "Hubo un error",
      }),
    );
  }
};
// get Solicitudes User

export const FindSolicitudesUser = async (dispatch) => {
  const token = Cookies.get("token");
  try {
    const { sub } = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_JWT);
    const { data } = await api.get(getSolicitudesUser(sub));

    dispatch(updateTableLength(data.length));
    dispatch(updatedUserSolicitudes(data.reverse()));
  } catch (error) {
    dispatch(
      updateAlert({
        type: "error",
        open: true,
        children: "Hubo un error",
      }),
    );
  }
};
