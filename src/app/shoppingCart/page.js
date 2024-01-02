"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FindIngredientsUser } from "@/services/user";
import { Typography } from "@mui/material";

import TableShoppingCart from "@/components/Table/ShoppingCart/TableShoppingCart";

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
