"use client";

import * as React from "react";

import {
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  Table,
  TableBody,
} from "@mui/material";

export default function TableOrders({ tableHead, tableBody, tableFooter }) {
  return (
    <TableContainer
      elevation={0}
      sx={{
        borderBottom: "0",
        borderTop: { xs: "1px solid #ddd" },
        borderRadius: 0,
        mt: { xs: 3, md: 3.5, xl: 4, "2xl": 5 },
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead}
            <TableCell align="center">Accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{tableBody}</TableBody>
        {tableFooter}
      </Table>
    </TableContainer>
  );
}
