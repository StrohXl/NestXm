"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FindSolicitudesUser } from "@/services/user";
import { ShoppingCart } from "@mui/icons-material";
import { TableCell } from "@mui/material";

import TableOrders from "../Table";
import Pagination from "../TableFooter";
import TableLoading from "../TableLoading";
import TableNotHave from "../TableNotHave";
import TableRowSolicitudes from "./TableRowSolicitudes";

const TableSolicitudes = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const solicitudes = useSelector((state) => state.user.userSolicitudes);
  const tableLength = useSelector((state) => state.user.table.length);

  const getSolicitudes = async () => {
    await FindSolicitudesUser(dispatch);
    setLoading(false);
  };

  useEffect(() => {
    getSolicitudes();
  }, []);

  useEffect(() => {
    if (
      tableLength == 5 ||
      tableLength == 10 ||
      tableLength == 15 ||
      tableLength == 20 ||
      tableLength == 25 ||
      tableLength == 30
    ) {
      setPage(0);
    }
  }, [tableLength]);

  return (
    <TableOrders
      tableHead={
        <>
          <TableCell align="left">Fecha</TableCell>
          <TableCell align="right">Monto</TableCell>
          <TableCell align="right">Saldo</TableCell>
        </>
      }
      tableBody={
        loading == true ? (
          <TableLoading />
        ) : solicitudes.length == 0 ? (
          <TableNotHave
            title={"No tienes Ordenes de Compra"}
            icon={<ShoppingCart color="disabled" sx={{ fontSize: 50 }} />}
          />
        ) : (
          solicitudes
            .slice(page * 5, page * 5 + 5)
            .map((row) => <TableRowSolicitudes key={row.id} row={row} />)
        )
      }
      tableFooter={
        loading == false &&
        solicitudes.length > 5 && (
          <Pagination changePage={(value) => setPage(value)} page={page} />
        )
      }
    />
  );
};
export default TableSolicitudes;
