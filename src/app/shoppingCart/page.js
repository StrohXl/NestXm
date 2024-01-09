"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSearchParams } from "next/navigation";

import ListShoppingCart from "@/components/listCards/listShoppingCart";
import { FindIngredientsUser } from "@/services/user";
import { Box, Typography } from "@mui/material";

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const params = useSearchParams();
  const select = params.get("selected");

  useEffect(() => {
    FindIngredientsUser(dispatch);
  }, []);
  useEffect(() => {
    if (select) {
      const menuItem = document.getElementById(select);
      const menuclass = document.getElementsByClassName(select);
      if (menuItem) {
        menuclass[0].scrollIntoView();
      }
    }
  }, [select]);

  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 1.5,
        background: "#fff",
        p: 3,
        maxWidth: 800,
      }}
    >
      <Typography variant="h4">Carrito de compras</Typography>
      <Typography ml={1} mt={1} component={"p"} variant="body1">
        Por favor resive su lista de productos,{" "}
        <b>
          podra seleccionar de forma individual la cantidad del producto que
          desea comprar
        </b>
      </Typography>
      <ListShoppingCart />
    </Box>
  );
}

export default ShoppingCartPage;
