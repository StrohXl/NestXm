import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { useSelector } from "react-redux/";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const user = useSelector((state) => state.user.user);
  return (
    <React.Fragment>
      <Title>Saldo</Title>
      <Typography component="p" variant="h4">
        {user.money ? user.money : 0}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          historial de movimientos
        </Link>
      </div>
    </React.Fragment>
  );
}
