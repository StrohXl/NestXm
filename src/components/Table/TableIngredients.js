import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
export default function TableIngredients() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("http://localhost:8000/ingredients");
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <TableContainer component={Paper} sx={{ mt: 5 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cantidad disponible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length == 0 ? (
            <Typography>No hay Ingredientes disponibles</Typography>
          ) : (
            data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.stock}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
