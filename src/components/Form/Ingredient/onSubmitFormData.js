import { useSelector } from "react-redux";

import { updateErrorImage } from "@/app/store/features/formIngredient";
import { createIngredient, updateIngredient } from "@/services/ingredients";
const OnSubmit = async (form, dispatch, type, router, image, idIngredient) => {
  console.log(form);
};
export default OnSubmit;
