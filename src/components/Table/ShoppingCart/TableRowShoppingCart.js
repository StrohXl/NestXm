import React from "react";
import { useSelector } from "react-redux";

import { useSearchParams } from "next/navigation";

import { Avatar, TableCell, TableRow } from "@mui/material";

import ButtonAccionShopping from "./ButtonAccionShopping";

function TableRowShoppingCart() {
  const params = useSearchParams();
  const selected = params.get("selected");
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const ingredients = useSelector((state) => state.user.userIngredient);
  return (
    <>
      {shoppingCart.map((i, index) => {
        const ingredient = ingredients.find((value) => value.id == i.id);
        return (
          <TableRow
            key={index}
            hover
            selected={selected == ingredient.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Avatar src={ingredient.imageUrl} />
            </TableCell>
            <TableCell component="th" scope="row">
              {ingredient.name}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              {i.cant}
            </TableCell>
            <TableCell align="center">Bs. {ingredient.price}</TableCell>
            <TableCell align="center">
              Bs. {ingredient.price * i.cant}
            </TableCell>
            <TableCell align="center">
              <ButtonAccionShopping id={ingredient.id} />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}

export default TableRowShoppingCart;
