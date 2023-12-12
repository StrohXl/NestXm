import * as React from "react";

import Link from "next/link";

import { Typography } from "@mui/material";

import TableSolicitudes from "../Table/Solicitudes/TableSolicitudes";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44,
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99,
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81,
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39,
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79,
  ),
];

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
