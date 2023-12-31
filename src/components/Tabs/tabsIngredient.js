import { AddShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";

import TableIngredients from "../Table/TableIngredients";

export const TabsIngredients = () => {
  return (
    <>
      <Button variant="contained" endIcon={<AddShoppingCart />}>
        Solicitar Ingredientes
      </Button>
      <TableIngredients />
    </>
  );
};
