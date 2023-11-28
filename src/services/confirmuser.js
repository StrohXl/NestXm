import { endPoints } from "@/services/routes";
import axios from "axios";
import Cookies from "js-cookie";
const { confirmUser } = endPoints;
const { confirm, sendEmail } = confirmUser;

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

export const ConfirmUser = async () => {
  return;
};
