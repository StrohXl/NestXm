import * as React from "react";
import { useSelector } from "react-redux/";

import Typography from "@mui/material/Typography";

import Title from "./Title";

export default function Deposits() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <Title>Saldo</Title>
      <Typography mb={8} component="p" variant="h4">
        {user.money ? user.money : 0}
      </Typography>
    </>
  );
}
