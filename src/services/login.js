import axios from "axios";
import { endPoints } from "./routes";
import Cookies from "js-cookie";
import "dotenv/config";
const { login } = endPoints;

export const loginUser = async (user) => {
  try {
    const {
      data,
      data: {
        response: { token },
      },
    } = await axios.post(login, user);
    const expires = new Date(new Date().getTime() + 5 * 60 * 1000);
    Cookies.set("token", token, {
      expires,
    });
    return { children: data.message, type: "success", open: true };
  } catch (error) {
    const {
      response: { data },
    } = error;
    return {
      children: data.message ? data.message : "error",
      type: "error",
      open: true,
    };
  }
};
