import axios from "axios";
import Cookies from "js-cookie";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const api = axios.create({
  baseURL: apiUrl,
});
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");

    const confirmEmail = Cookies.get("confirmEmail");
    if (token || confirmEmail) {
      config.headers["Authorization"] = `Bearer ${
        confirmEmail ? confirmEmail : token
      }`;
    } else {
      return config;
    }

    return config;
  },
  (error) => {
    return PromiseRejectionEvent.reject(error);
  },
);
export default api;
