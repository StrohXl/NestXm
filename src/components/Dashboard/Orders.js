import * as React from "react";

import Link from "next/link";

import { Box, Typography } from "@mui/material";

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
      <Typography
        px={{ xs: 2, md: 3 }}
        component={"h2"}
        variant="h4"
        color={"primary"}
      >
        Ordenes Recientes
      </Typography>
      <TableSolicitudes />
      <Box px={{ xs: 2, md: 3 }} mt={2}>
        <Link
          href="/orders"
          style={{ color: "#000", textDecoration: "none"}}
        >
          Ver mas
        </Link>
      </Box>
    </React.Fragment>
  );
}
