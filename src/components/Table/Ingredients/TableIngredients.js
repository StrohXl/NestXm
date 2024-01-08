"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FindIngredientsUser } from "@/services/user";
import { LocalDining } from "@mui/icons-material";
import { TableCell } from "@mui/material";

import TableOrders from "../Table";
import Pagination from "../TableFooter";
import TableLoading from "../TableLoading";
import TableNotHave from "../TableNotHave";
import TableRowIngredient from "./TableRowIngredient";

const TableIngredients = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.user.userIngredient);
  const getIngredients = async () => {
    await FindIngredientsUser(dispatch);
    setLoading(false);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  useEffect(() => {
    if (ingredients.length < 6) {
      setPage(0);
    }
  }, [ingredients.length]);
  return (
    <TableOrders
      tableHead={
        <>
          <TableCell width={30}>Imagen</TableCell>
          <TableCell>Nombre</TableCell>
          <TableCell align="right">Precio</TableCell>
        </>
      }
      tableBody={
        loading == true ? (
          <TableLoading />
        ) : ingredients.length == 0 ? (
          <TableNotHave
            title={"No tienes Ingredientes"}
            icon={<LocalDining color="disabled" sx={{ fontSize: 50 }} />}
          />
        ) : (
          ingredients
            .slice(page * 5, page * 5 + 5)
            .map((row) => <TableRowIngredient key={row.id} row={row} />)
        )
      }
      tableFooter={
        loading == false &&
        ingredients.length > 5 && (
          <Pagination changePage={(value) => setPage(value)} page={page} />
        )
      }
    />
  );
};
export default TableIngredients;
