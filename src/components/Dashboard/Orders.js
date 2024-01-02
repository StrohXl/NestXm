import * as React from "react";

import Link from "next/link";

import { Typography } from "@mui/material";

import TableSolicitudes from "../Table/Solicitudes/TableSolicitudes";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Typography component={"h2"} variant="h4" color={"primary"}>
        Ordenes Recientes
      </Typography>
      <TableSolicitudes />
      <Link
        href="/orders"
        onClick={preventDefault}
        style={{ color: "#000", textDecoration: "none", marginTop: "20px" }}
      >
        Ver mas
      </Link>
    </React.Fragment>
  );
}
