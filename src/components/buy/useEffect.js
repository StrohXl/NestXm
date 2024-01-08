"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "next/navigation";

import { getOneIngredient } from "@/services/ingredients";

const useEffectBuy = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const GetIngredient = async () => {
    const data = await getOneIngredient(dispatch, params.id);
    setData(data);
  };
  useEffect(() => {
    GetIngredient();
  }, []);

  return { data, params, };
};
export default useEffectBuy;
