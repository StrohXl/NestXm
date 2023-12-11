import * as React from "react";
import { useSelector } from "react-redux/";

import Typography from "@mui/material/Typography";

import Title from "./Title";

export default function Deposits() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <Typography component={"h2"} variant="h4" color={"primary"} mb={2}>
        Saldo
      </Typography>
      <Typography ml={2} component="p" variant="h5">
        {user.money ? user.money : 0}
      </Typography>
    </>
  );
}
