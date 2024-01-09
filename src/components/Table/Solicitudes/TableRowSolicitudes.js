import React from "react";
import { useDispatch } from "react-redux";

import dayjs from "dayjs";

import { deleteSolicitud } from "@/services/solicitudes";
import { Delete } from "@mui/icons-material";
import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const TableRowSolicitudes = ({ row, key }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow
        key={key}
        hover
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        onClick={() => setOpen(!open)}
      >
        <TableCell align="left">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              sx={{
                ".MuiFormControl-root": {
                  minWidth: {
                    xs: "180px !important",
                    sm: "190px !important",
                    md: "220px !important",
                  },
                },
              }}
              components={["DateTimePicker"]}
            >
              <DateTimePicker
                sx={{
                  ".MuiInputBase-root": {
                    maxWidth: {
                      xs: "180px !important",
                      sm: "190px !important",
                      md: "220px !important",
                    },
                  },
                }}
                format="DD/MM/YYYY HH:mm A"
                label="Fecha"
                value={dayjs(row.createAt)}
                readOnly
              />
            </DemoContainer>
          </LocalizationProvider>
        </TableCell>
        <TableCell
          sx={{ display: { xs: "none", sm: "table-cell" } }}
          align="right"
        >
          <Typography color={"red"}>-{row.price}</Typography>
        </TableCell>
        <TableCell
          sx={{ display: { xs: "none", sm: "table-cell" } }}
          align="right"
        >
          {row.remaining}
        </TableCell>
        <TableCell align="center">
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              deleteSolicitud(row.id, dispatch);
            }}
            size="small"
          >
            <Delete sx={{ fontSize: { xs: 20, md: 25, "2xl": 30 } }} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow sx={{ display: { xs: "table-row", sm: "none" } }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Saldo: {row.remaining} Bs
              </Typography>
              {row.description}
            </Box>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Monto:{" "}
                <Typography ml={1} component={"span"} color={"red"}>
                  -{row.price} Bs
                </Typography>
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
