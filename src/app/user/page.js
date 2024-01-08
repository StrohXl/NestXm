"use client";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";

import StringAvatar from "@/components/Avatar/stringAvatar";
import DeleteUser from "@/components/ConfirmPopover/deleteUser";
import ContentUser from "@/components/Modal/contentUser";
import ModalOpen from "@/components/Modal/modal";
import openModal from "@/components/Modal/openModal";
import { Edit } from "@mui/icons-material";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  IconButton,
} from "@mui/material";

const User = () => {
  const user = useSelector((state) => state.user.user);
  const open = useSelector((state) => state.components.openModal);
  const tableUser = [
    {
      value1: "Nombre",
      value2: `${user.firstName} ${user.lastName}`,
      url: "/user/edit-name",
    },
    {
      value1: "Correo electrónico",
      value2: user.email,
      url: "/user",
    },
    {
      value1: "Contraseña",
      value2: "**************",
      url: "/user/edit-password",
    },
  ];
  const dispatch = useDispatch();
  return (
    <>
      <ModalOpen open={open}>
        <ContentUser />
      </ModalOpen>
      <Paper sx={{ p: 2, py: { xs: 5 } }}>
        <Grid
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
        >
          <div onClick={() => openModal(dispatch)}>
            <StringAvatar
              props={{
                bgcolor: "#9c27b0",
                cursor: "pointer",
                color: "#fff",
                mb: { xs: 1 },
                height: { xs: 90, sm: 100, md: 110, xl: 120, "2xl": 150 },
                width: { xs: 90, sm: 100, md: 110, xl: 120, "2xl": 150 },
                fontSize: 25,
              }}
            />
          </div>
          <Typography component={"h1"} variant="h4">
            Bienvenido/a, {user.firstName} {user.lastName}
          </Typography>
        </Grid>
        <Paper elevation={2} sx={{ mt: 5, pt: 3 }}>
          <Typography component={"h2"} variant="h5" ml={2}>
            Informacion Personal
          </Typography>
          <Table sx={{ display: { xs: "none", sm: "table" }, mt: 1 }}>
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
                          <Edit
                            sx={{ fontSize: { xs: 20, md: 24, "2xl": 28 } }}
                            color="primary"
                            fontSize="small"
                          />
                        </IconButton>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Table sx={{ display: { xs: "table", sm: "none" }, mt: 1 }}>
            <TableBody>
              {tableUser.map((i, index) => {
                return (
                  <TableRow
                    key={index}
                    hover
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Grid display={"grid"} gap={1}>
                        <Typography fontWeight={700} variant="h5">
                          {i.value1}
                        </Typography>
                        <Typography ml={1}>{i.value2}</Typography>
                      </Grid>
                    </TableCell>
                    <TableCell sx={{ py: 0 }} align="right">
                      <Link href={i.url}>
                        <IconButton>
                          <Edit
                            sx={{ fontSize: { xs: 20, md: 24, "2xl": 28 } }}
                            color="primary"
                            fontSize="small"
                          />
                        </IconButton>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <Paper elevation={2} sx={{ p: 2, mt: 5 }}>
          <Typography component={"h2"} variant="h5">
            Cuenta
          </Typography>
          <DeleteUser />
        </Paper>
      </Paper>
    </>
  );
};
export default User;
