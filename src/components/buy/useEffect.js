"use client";
import { getOneIngredient } from "@/services/ingredients";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

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

  return { data, params };
};
export default useEffectBuy;
