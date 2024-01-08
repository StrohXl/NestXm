import Link from "next/link";

import TableIngredients from "@/components/Table/Ingredients/TableIngredients";
import { LocalDining } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";

const Ingredients = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #ddd",
      }}
    >
      <Box p={{ xs: 2, sm: 2, md: 3 }} pb={{ xs: 0, sm: 0, md: 0 }}>
        <Typography cp variant="h4">
          Ingredientes
        </Typography>
        <Link href={"/ingredients/create-ingredient"}>
          <Button
            sx={{ mt: 3, textTransform: "none" }}
            variant="contained"
            endIcon={<LocalDining />}
          >
            Crear Ingrediente
          </Button>
        </Link>
      </Box>
      <Box px={{ xs: 0 }}>
        <TableIngredients />
      </Box>
    </Paper>
  );
};
export default Ingredients;
