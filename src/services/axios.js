import axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get("token");
const confirmEmail = Cookies.get("confirmEmail");
if (token || confirmEmail) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${
    confirmEmail ? confirmEmail : token
  }`;
}
