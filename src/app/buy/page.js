import ListCardIngredient from "@/components/listCards/listCardsIngredients";
import TableSolicitudes from "@/components/Table/Solicitudes/TableSolicitudes";
import { ShoppingCart } from "@mui/icons-material";
import { Typography, Button } from "@mui/material";

const Orders = () => {
  return (
    <>
      <Typography variant="h2">Comprar</Typography>
      <ListCardIngredient />
    </>
  );
};
export default Orders;
