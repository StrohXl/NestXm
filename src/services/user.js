import axios from "axios";
import { endPoints } from "./routes";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { getUser } from "@/app/store/features/dataUser";
import "dotenv/config";

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
  const { sub, username } = jwt.verify(
    token,
    process.env.NEXT_PUBLIC_SECRET_JWT
  );
  const { data } = await axios.get(getOne(sub));
  dispatch(getUser(data));
  return data;
};
