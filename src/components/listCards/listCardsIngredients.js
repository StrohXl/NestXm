"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FindIngredientsUser } from "@/services/user";
import { Grid } from "@mui/material";

import CardIngredient from "../Cards/CardIngredient";

const ListCardIngredient = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.user.userIngredient);
  const getIngredients = async () => {
    await FindIngredientsUser(dispatch);
  };
  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <Grid
      mt={{ xs: 5 }}
      display={"grid"}
      gridTemplateColumns={{
        xs: "45% 45%",
        sm: "50% 50%",
        md: "45% 45%",
        lg: "220px 220px 220px",
        xl: "240px 240px 240px",
        "2xl": "220px 220px 220px 220px",
      }}
      justifyContent={{ xs: "center", md: "flex-start" }}
      gap={{ xs: 1, sm: 2 }}
    >
      {ingredients.map((i, index) => (
        <CardIngredient
          key={i.id}
          name={i.name}
          imageUrl={i.imageUrl}
          price={i.price}
          id={i.id}
        />
      ))}
    </Grid>
  );
};
export default ListCardIngredient;
