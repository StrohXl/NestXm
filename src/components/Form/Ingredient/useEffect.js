"use client";
import { useEffect } from "react";

import { useSearchParams, useRouter } from "next/navigation";

import {
  updateIdIngredient,
  updateImage,
  updateOnChangeInImage,
} from "@/app/store/features/formIngredient";

import GetIngredient from "./getIngredient";

const FormIngredientUseEffect = (type, dispatch, setValue) => {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    dispatch(updateImage(null));
    dispatch(updateOnChangeInImage(false));
    if (type != "create") {
      const idQuery = params.get("id");
      if (!idQuery) {
        router.push("/ingredients");
      } else {
        dispatch(updateIdIngredient(idQuery));
        GetIngredient(idQuery, router, dispatch, setValue);
      }
    } else {
      dispatch(updateImage(null));
    }
  }, []);
};
export default FormIngredientUseEffect;
