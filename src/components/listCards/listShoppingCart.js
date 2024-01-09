"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FindIngredientsUser } from "@/services/user";
import { ShoppingCart } from "@mui/icons-material";
import { Box, Grid, Icon, MenuList, Typography } from "@mui/material";

import MenuItemIngredient from "./MenuItemIngredient";

const ListShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const ingredients = useSelector((state) => state.user.userIngredient);
  useEffect(() => {
    FindIngredientsUser(dispatch);
  }, []);
  return (
    <Box mx={"auto"} mt={{ xs: 4, md: 5, "2xl": 6 }}>
      {shoppingCart.length == 0 ? (
        <Grid display={"grid"} justifyContent={"center"}>
          <Icon sx={{ height: "auto", width: "auto" }}>
            <ShoppingCart
              color="disabled"
              sx={{ fontSize: { xs: 80, md: 85, xl: 90, "2xl": 95 } }}
            />
          </Icon>
          <Typography variant="h6" textAlign="center">
            No tienes productos
          </Typography>
        </Grid>
      ) : (
        <>
          <Grid py={1} display={"flex"} alignItems={"center"}>
            <Typography variant="h5" color={"#555"}>
              Lista de Productos
            </Typography>
          </Grid>
          <MenuList
            sx={{
              py: 0,
              mt: { xs: 2 },
              gap: { xs: 1, sm: 2, md: 3 },
              display: "grid",
            }}
          >
            {shoppingCart.map((i, index) => {
              const ingredient = ingredients.find((value) => value.id == i.id);
              return (
                <MenuItemIngredient
                  key={index}
                  id={i.id}
                  ingredient={ingredient}
                  item={i}
                />
              );
            })}
          </MenuList>
        </>
      )}
    </Box>
  );
};
export default ListShoppingCart;
