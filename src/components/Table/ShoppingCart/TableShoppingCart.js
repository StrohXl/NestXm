import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteAllProducts } from "@/app/store/features/shoppingCart";
import { Delete, ShoppingCart } from "@mui/icons-material";
import {
  Table,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  TableBody,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";

import Pagination from "../TableFooter";
import TableNotHave from "../TableNotHave";
import TableRowShoppingCart from "./TableRowShoppingCart";

function TableShoppingCart() {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  return (
    <TableContainer
      component={Paper}
      sx={{ mt: { xs: 1, sm: 2, md: 3, xl: 4, "2xl": 5 } }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={30}></TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="center">Precio del Producto</TableCell>
            <TableCell align="center">Precio Total</TableCell>
            <TableCell align="center">
              <Grid>
                <Tooltip
                  placement="top"
                  title={<Typography variant="h6">Eliminar</Typography>}
                >
                  <IconButton onClick={() => dispatch(deleteAllProducts())}>
                    <Delete />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  placement="top"
                  title={<Typography variant="h6">Comprar</Typography>}
                >
                  <IconButton>
                    <ShoppingCart />
                  </IconButton>
                </Tooltip>
              </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shoppingCart.length == 0 ? (
            <TableNotHave
              icon={
                <ShoppingCart
                  color="disabled"
                  sx={{ fontSize: { xs: 40, md: 75, "2xl": 90 } }}
                />
              }
              title={"No tienes Productos en el carrito"}
            />
          ) : (
            <TableRowShoppingCart />
          )}
        </TableBody>
        {shoppingCart.length > 5 && <Pagination />}
      </Table>
    </TableContainer>
  );
}

export default TableShoppingCart;
