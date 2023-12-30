"use client";
import { FindIngredientsUser } from "@/services/user";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardIngredient from "../Cards/CardIngredient";

const ListCardIngredient = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.user.userIngredient);
  console.log(ingredients);
  const getIngredients = async () => {
    await FindIngredientsUser(dispatch);
  };
  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <Grid
      mt={{ xs: 5 }}
      px={{ xs: "5%" }}
      display={"grid"}
      gridTemplateColumns={{
        xs: "50% 50%",
        sm: "200px 200px",
        md: "220px 220px",
        lg: "220px 220px 220px",
        xl: "220px 220px 220px 220px",
      }}
      justifyContent={{ xs: "center", md: "flex-start" }}
      gap={{ xs: 1, sm: '5%', md: 2 }}
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
