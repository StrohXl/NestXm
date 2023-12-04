"use client";
import { useSelector } from "react-redux";

import Link from "next/link";

import StringAvatar from "@/components/Avatar/stringAvatar";
import { ArrowForwardIos, Edit } from "@mui/icons-material";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

const User = () => {
  const user = useSelector((state) => state.user.user);
  const tableUser = [
    {
      value1: "Nombre",
      value2: `${user.firstName} ${user.lastName}`,
      url: "/user/edit-name",
    },
    {
      value1: "Correo electrónico",
      value2: user.email,
      url: "/user/edit-email",
    },
    {
      value1: "Contraseña",
      value2: "**************",
      url: "/user/edit-password",
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
          <StringAvatar />
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
                      <Link href={i.url}>
                        <IconButton>
                          <Edit color="primary" fontSize="small" />
                        </IconButton>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <Paper elevation={0} sx={{ p: 2, mt: 5 }}>
          <Typography variant="h6">Cuenta</Typography>
          <Button sx={{ mt: 2 }} variant="text" color="primary">
            Eliminar Cuenta
          </Button>
        </Paper>
      </Paper>
    </>
  );
};
export default User;
