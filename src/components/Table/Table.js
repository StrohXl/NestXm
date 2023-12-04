"use client";

import * as React from "react";

import {
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  Table,
  Paper,
  TableBody,
} from "@mui/material";

export default function TableOrders({
  tableHead,
  tableBody,

  tableFooter,
}) {
  return (
    <TableContainer component={Paper} sx={{ mt: 5 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead}
            <TableCell align="right">Accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{tableBody}</TableBody>
        {tableFooter}
      </Table>
    </TableContainer>
  );
}
