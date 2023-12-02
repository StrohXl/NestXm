"use client";
import TableOrders from "@/components/Table/TableOrders";
import { Typography, Button } from "@mui/material";

const Orders = () => {
  return (
    <>
      <Typography variant="h6" sx={{ mt: 2 }}>
        ORDENES
      </Typography>
      <Button variant="contained" sx={{ mt: 4 }} color="primary">
        Crear Orden de compra
      </Button>
      <TableOrders />
    </>
  );
};
export default Orders;
