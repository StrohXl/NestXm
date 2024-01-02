"use client";
import React from "react";
import { useDispatch } from "react-redux";

import { useRouter } from "next/navigation";

import { deleteProduct } from "@/app/store/features/shoppingCart";
import ListiconButtonShoppingCart from "@/helpers/ListIconButtonShoppingCart";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";

function ButtonAccionShopping({ id }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const FunctionButton = (index, id) => {
    if (index == 0) {
      router.push(`/buy/${id}`);
    }
    if (index == 1) {
      DeleteP(id);
    } else {
      BuyP(id);
    }
  };

  const BuyP = () => {};
  const DeleteP = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <Grid display={"flex"} gap={1} ml={3}>
      {ListiconButtonShoppingCart.map((item, index) => (
        <Tooltip
          placement="top"
          key={index}
          title={<Typography variant="h6">{item.titleTooltip}</Typography>}
        >
          <IconButton onClick={() => FunctionButton(index, id)}>
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Grid>
  );
}

export default ButtonAccionShopping;
