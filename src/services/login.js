import axios from "axios";
import { endPoints } from "./routes";
import Cookies from "js-cookie";
import "dotenv/config";
const { login } = endPoints;

export const loginUser = async (user, checked) => {
  console.log(checked);
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

export const Logout = async (router) => {
  Cookies.remove("token");
  router.push("/sign-in");
};
