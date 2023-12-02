import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

import "../services/axios";
import "dotenv/config";
import { updateAlert } from "@/app/store/features/alertSlice";
import { getUser } from "@/app/store/features/dataUser";

import { endPoints } from "./routes";

const { user } = endPoints;
const {
  create,
  getAll,
  getOne,
  update,
  delete: DeleteUser,
  getAllEmail,
  getOneEmail,
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
  const { sub } = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_JWT);
  const { data } = await axios.get(getOne(sub));
  dispatch(getUser(data));
  return data;
};
export const Update = async (dispatch, body) => {
  const confirmEmail = Cookies.get("confirmEmail");
  Cookies.remove("confirmEmail");
  Cookies.remove("confirm");
  try {
    const { sub } = jwt.verify(
      confirmEmail,
      process.env.NEXT_PUBLIC_SECRET_JWT,
    );
    await axios.patch(update(sub), body);
    dispatch(
      updateAlert({
        type: "success",
        open: true,
        children: "Se cambio su contraseña exitosamente",
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
