"use client";
import TableSolicitudes from "@/components/Table/Solicitudes/TableSolicitudes";
import { Paper, Typography } from "@mui/material";

const Orders = () => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #ddd",
          pt: { xs: 2, md: 3 },
        }}
      >
        <Typography px={{ xs: 2, md: 3 }} color={"primary"} variant="h3">
          Ordenes
        </Typography>
        <TableSolicitudes />
      </Paper>
    </>
  );
};
export default Orders;
