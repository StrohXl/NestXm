import * as React from "react";
import { useSelector } from "react-redux/";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <Title>Saldo</Title>
      <Typography mb={8} component="p" variant="h4">
        {user.money ? user.money : 0}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          historial de movimientos
        </Link>
      </div>
    </>
  );
}
