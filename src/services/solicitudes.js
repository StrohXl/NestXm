import { endPoints } from "@/services/routes";
import api from "./axios";
import { updateAlert } from "@/app/store/features/alertSlice";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { FindSolicitudesUser } from "./user";
import { deleteProduct } from "@/app/store/features/shoppingCart";
import { elementType } from "prop-types";

const { solicitudDeCompra } = endPoints;

export async function buyProduct(products, dispatch) {
  const token = Cookies.get("token");
  const { sub } = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_JWT);
  try {
    await api.post(solicitudDeCompra.create, {
      user: sub,
      solicitudes: products,
    });
    dispatch(
      updateAlert({
        open: true,
        children: "Producto Comprado",
        type: "success",
      })
    );
    setTimeout(() => {
      products.forEach((element, index) => {
        dispatch(deleteProduct(element.idIngredient));
      });
    }, 2000);
    return true;
  } catch (error) {
    console.log(error);
    dispatch(
      updateAlert({ open: true, children: "Hubo un error", type: "error" })
    );
    return false;
  }
}
export async function deleteSolicitud(id, dispatch) {
  try {
    await api.delete(solicitudDeCompra.delete(id));
    dispatch(
      updateAlert({
        open: true,
        children: "Solicitud de compra Eliminada",
        type: "success",
      })
    );
    await FindSolicitudesUser(dispatch);
    return true;
  } catch (error) {
    console.log(error);
    dispatch(
      updateAlert({ open: true, children: "Hubo un error", type: "error" })
    );
    return false;
  }
}
