import { endPoints } from "@/services/routes";
import axios from "axios";
import Cookies from "js-cookie";
const { confirmUser } = endPoints;
const { confirm, sendEmail, confirmEmail } = confirmUser;
export const SendEmail = async (user) => {
  try {
    const {
      data: { response },
    } = await axios.post(sendEmail, user);
    Cookies.set("email", response.id);
    return {
      type: "success",
      open: "true",
      children: "Se ha enviado un token de confirmacion a su correo",
    };
  } catch (error) {
    console.log(error);
    return {
      children: error?.response.data.message,
      open: true,
      type: "error",
    };
  }
};

export const ConfirmToken = async (data) => {
  try {
    const res = await axios.post(confirm, data);
    return {
      open: true,
      type: "success",
      children: "Usuario creado exitosamente",
    };
  } catch (error) {
    return {
      open: true,
      type: "error",
      children: error.response?.data?.message,
    };
  }
};

export const ConfirEmail = async (email) => {
  try {
    const {
      data: { response },
    } = await axios.post(confirmEmail, email);
    const expires = new Date(new Date().getTime() + 5 * 60 * 1000);
    Cookies.set("confirm", response.token, { expires });
    Cookies.set("confirmEmail", response.jwt, { expires });
    return {
      type: "success",
      open: "true",
      children: "Se ha enviado un email a su correo",
    };
  } catch (error) {
    return {
      type: "error",
      open: true,
      children: error.response?.data?.message,
    };
  }
};

export const ResendEmail = async (id) => {
  try {
    const {
      data: { response },
    } = await axios.patch(confirm + `/${id}`);
    return {
      type: "success",
      open: "true",
      children: response.message,
    };
  } catch (error) {
    console.log(error);
    return {
      children: error.message,
      open: true,
      type: "error",
    };
  }
};
