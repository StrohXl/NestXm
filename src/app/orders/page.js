"use client";
import TableSolicitudes from "@/components/Table/Solicitudes/TableSolicitudes";
import { ShoppingCart } from "@mui/icons-material";
import { Typography, Button } from "@mui/material";

const Orders = () => {
  return (
    <>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Ordenes
      </Typography>
      <Button
        endIcon={<ShoppingCart />}
        variant="contained"
        sx={{ mt: 4 }}
        color="primary"
        onClick={() => alert("Esta funcion por ahora no esta habilitada")}
      >
        Crear Orden de compra
      </Button>
      <TableSolicitudes />
    </>
  );
};
export default Orders;
