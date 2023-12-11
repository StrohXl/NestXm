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

  const getSolicitudes = async () => {
    await FindSolicitudesUser(dispatch);
    setLoading(false);
  };

  useEffect(() => {
    getSolicitudes();
  }, []);
  useEffect(() => {
    if (solicitudes.length < 6) {
      setPage(0);
    }
  }, [solicitudes]);

  return (
    <TableOrders
      tableHead={
        <>
          <TableCell width={30} />
          <TableCell align="center">Fecha</TableCell>
          <TableCell align="right">Precio total</TableCell>
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
          <Pagination changePage={(value) => setPage(value)} />
        )
      }
    />
  );
};
export default TableSolicitudes;
