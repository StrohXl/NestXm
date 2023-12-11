import axios from "axios";
import Cookies from "js-cookie";

import { endPoints } from "./routes";
import "dotenv/config";
const { login } = endPoints;

export const loginUser = async (user, checked) => {
  try {
    const {
      data,
      data: {
        response: { token },
      },
    } = await axios.post(login, user);
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 10);
    Cookies.set("token", token, {
      expires: checked && expirationDate,
    });
    return { children: data.message, type: "success", open: true };
  } catch (error) {
    return {
      children: error.response?.data?.message,
      type: "error",
      open: true,
    };
  }
};

export const Logout = async (router) => {
  Cookies.remove("token");
  router.push("/sign-in");
};
