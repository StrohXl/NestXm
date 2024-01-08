import ListCardIngredient from "@/components/listCards/listCardsIngredients";
import { Paper, Typography } from "@mui/material";

const Orders = () => {
  return (
    <Paper elevation={0} sx={{ border: "1px solid #ddd", p: { xs: 2, sm: 3 } }}>
      <Typography variant="h3">Comprar</Typography>
      <ListCardIngredient />
    </Paper>
  );
};
export default Orders;
