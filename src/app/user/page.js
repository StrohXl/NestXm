"use client";
import { useSelector } from "react-redux";

import { ArrowForwardIos } from "@mui/icons-material";
import {
  Avatar,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "#fff",
      color: "#9c27b0",
      fontSize: "28px",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const User = () => {
  const user = useSelector((state) => state.user.user);
  const tableUser = [
    {
      value1: "Nombre",
      value2: `${user.firstName} ${user.lastName}`,
      accion: () => null,
    },
    {
      value1: "Correo electrónico",
      value2: user.email,
      accion: () => null,
    },
    {
      value1: "Contraseña",
      value2: "**************",
      accion: () => null,
    },
  ];
  return (
    <>
      <Paper sx={{ p: 2, pt: 5 }}>
        <Grid
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
        >
          <Avatar
            style={{
              textTransform: "uppercase",
              width: "80px",
              height: "80px",
              border: "3px solid #9c27b0",
            }}
            {...stringAvatar(!user ? "" : `${user.firstName} ${user.lastName}`)}
          />
          <Typography textAlign={"center"} variant="h5">
            Bienvenido/a, {user.firstName} {user.lastName}
          </Typography>
        </Grid>
        <Paper elevation={0} sx={{ p: 2, mt: 5 }}>
          <Typography variant="h6">Informacion Personal</Typography>
          <Table sx={{ mt: 2 }}>
            <TableBody>
              {tableUser.map((i, index) => {
                return (
                  <TableRow
                    key={index}
                    hover
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {i.value1}
                    </TableCell>
                    <TableCell align="left">{i.value2}</TableCell>
                    <TableCell sx={{ py: 0 }} align="right">
                      <ArrowForwardIos color="primary" fontSize="small" />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Paper>
    </>
  );
};
export default User;
