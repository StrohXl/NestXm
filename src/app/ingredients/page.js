import Link from "next/link";

import TableIngredients from "@/components/Table/Ingredients/TableIngredients";
import { LocalDining } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const Ingredients = () => {
  return (
    <>
      <Typography variant="h2" >Ingredientes</Typography>
      <Link href={"/ingredients/create-ingredient"}>
        <Button sx={{ mt: 4 }} variant="contained" endIcon={<LocalDining />}>
          Crear Ingrediente
        </Button>
      </Link>
      <TableIngredients />
    </>
  );
};
export default Ingredients;
