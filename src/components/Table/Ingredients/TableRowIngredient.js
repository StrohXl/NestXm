import React from "react";

import {
  Avatar,
  Box,
  Collapse,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import ButtonAccionTable from "../ButtonAccionTable";

const TableRowIngredient = ({ row, key }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow
        key={key}
        hover
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        onClick={() => setOpen(!open)}
      >
        <TableCell component="th" scope="row">
          <Avatar src={row.imageUrl} />
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">
          <ButtonAccionTable id={row.id} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Descripción:
              </Typography>
              {row.description == "undefined" || !row.description
                ? "Este ingrediente no tiene descripción"
                : row.description}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
export default TableRowIngredient;
