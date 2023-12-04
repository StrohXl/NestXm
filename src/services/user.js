import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

import "../services/axios";
import "dotenv/config";
import { updateAlert } from "@/app/store/features/alertSlice";
import {
  updatedUserIngredient,
  updateTableLength,
  getUser,
  updatedUserSolicitudes,
} from "@/app/store/features/dataUser";

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
    console.log(error);
    return error;
  }
};

export const Post = async (user) => {
  const data = await axios.post(create, user);
  return data;
};

export const FindOne = async (dispatch) => {
  const token = Cookies.get("token");
  if (token) {
    const { sub } = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_JWT);
    const { data } = await axios.get(getOne(sub));
    console.log(data);
    dispatch(getUser(data));
    return data;
  }
};

export const Update = async (dispatch, body) => {
  const confirmEmail = Cookies.get("confirmEmail");
  const token = Cookies.get("token");
  if (confirmEmail) {
    Cookies.remove("confirmEmail");
    Cookies.remove("confirm");
  }
  try {
    const { sub } = jwt.verify(
      confirmEmail ? confirmEmail : token,
      process.env.NEXT_PUBLIC_SECRET_JWT,
    );
    const res = await axios.patch(update(sub), body);
    console.log(res);

    dispatch(
      updateAlert({
        type: "success",
        open: true,
        children: "Cambios realizados",
      }),
    );

    return true;
  } catch (error) {
    console.log(error);
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
    const {
      data: { response },
    } = await axios.delete(DeleteUser(id));
    dispatch(
      updateAlert({
        type: "success",
        open: true,
        children: response.message,
      }),
    );
  } catch ({ error: { response } }) {
    dispatch(
      updateAlert({
        type: "success",
        open: true,
        children: response.message,
      }),
    );
  }
};

// get Ingredients User

export const FindIngredientsUser = async (dispatch) => {
  const token = Cookies.get("token");
  try {
    const { sub } = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_JWT);
    const { data } = await axios.get(getIngredientsUser(sub));
    dispatch(updatedUserIngredient(data));
    dispatch(updateTableLength(data.length));
  } catch (error) {
    console.log(error);
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
    const { data } = await axios.get(getSolicitudesUser(sub));
    dispatch(updatedUserSolicitudes(data));
  } catch (error) {
    console.log(error);
    dispatch(
      updateAlert({
        type: "error",
        open: true,
        children: "Hubo un error",
      }),
    );
  }
};
