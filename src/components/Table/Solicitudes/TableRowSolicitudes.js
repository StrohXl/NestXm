import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import ButtonAccionTable from "../ButtonAccionTable";

const TableRowSolicitudes = ({ row, key }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow
        key={key}
        hover
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>
          {row.description != "" && (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
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
              {row.description}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
export default TableRowSolicitudes;
