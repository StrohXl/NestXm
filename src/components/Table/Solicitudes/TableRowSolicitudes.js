import React from "react";

import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { deleteSolicitud } from "@/services/solicitudes";
import { useDispatch } from "react-redux";
import { Delete } from "@mui/icons-material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import { parseISO } from "date-fns";
import dayjs from "dayjs";

const TableRowSolicitudes = ({ row, key }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow
        key={key}
        hover
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="left">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              sx={{
                ".MuiFormControl-root": {
                  minWidth: "220px !important",
                },
              }}
              components={["DateTimePicker"]}
            >
              <DateTimePicker
                sx={{
                  ".MuiInputBase-root": { maxWidth: "220px !important" },
                }}
                format="DD/MM/YYYY HH:mm A"
                label="Fecha"
                value={dayjs(row.createAt)}
                readOnly
              />
            </DemoContainer>
          </LocalizationProvider>
        </TableCell>
        <TableCell align="right">
          <Typography color={"red"}>-{row.price}</Typography>
        </TableCell>
        <TableCell align="right">{row.remaining}</TableCell>
        <TableCell align="center">
          <IconButton
            onClick={(event) => {
              deleteSolicitud(row.id, dispatch);
            }}
            size="small"
          >
            <Delete sx={{ fontSize: { xs: 20, md: 25, "2xl": 30 } }} />
          </IconButton>
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
