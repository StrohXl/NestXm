"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import TableShoppingCart from "@/components/Table/ShoppingCart/TableShoppingCart";
import { FindIngredientsUser } from "@/services/user";
import { Typography } from "@mui/material";

function ShoppingCartPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    FindIngredientsUser(dispatch);
  }, []);

  return (
    <>
      <Typography variant="h2">Carrito</Typography>
      <TableShoppingCart />
    </>
  );
}

export default ShoppingCartPage;
