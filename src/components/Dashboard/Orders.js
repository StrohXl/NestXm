"use client ";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";

import { FindSolicitudesUser } from "@/services/user";
import { ShoppingCart } from "@mui/icons-material";
import { Box, TableCell, Typography } from "@mui/material";

import TableRowSolicitudes from "../Table/Solicitudes/TableRowSolicitudes";
import TableOrders from "../Table/Table";
import TableLoading from "../Table/TableLoading";
import TableNotHave from "../Table/TableNotHave";

export default function Orders() {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  const solicitudes = useSelector((state) => state.user.userSolicitudes);

  const getSolicitudes = async () => {
    await FindSolicitudesUser(dispatch);
    setLoading(false);
  };

  React.useEffect(() => {
    getSolicitudes();
  }, []);
  return (
    <React.Fragment>
      <Typography
        px={{ xs: 2, md: 3 }}
        component={"h2"}
        variant="h4"
        color={"primary"}
      >
        Ordenes Recientes
      </Typography>
      <TableOrders
        tableHead={
          <>
            <TableCell align="left">Fecha</TableCell>
            <TableCell
              sx={{ display: { xs: "none", sm: "table-cell" } }}
              align="right"
            >
              Monto
            </TableCell>
            <TableCell
              sx={{ display: { xs: "none", sm: "table-cell" } }}
              align="right"
            >
              Saldo
            </TableCell>
          </>
        }
        tableBody={
          loading == true ? (
            <TableLoading />
          ) : solicitudes.length == 0 ? (
            <TableNotHave
              title={"No tienes Ordenes de Compra"}
              icon={<ShoppingCart color="disabled" sx={{ fontSize: 50 }} />}
            />
          ) : (
            solicitudes
              .slice(0, 2)
              .map((row) => <TableRowSolicitudes key={row.id} row={row} />)
          )
        }
      />

      <Box px={{ xs: 2, md: 3 }} mt={2}>
        <Link href="/orders" style={{ color: "#000", textDecoration: "none" }}>
          Ver mas
        </Link>
      </Box>
    </React.Fragment>
  );
}
