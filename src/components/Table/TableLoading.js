import { TableCell, TableRow, CircularProgress } from "@mui/material";

const TableLoading = ({ icon, title }) => {
  return (
    <TableRow sx={{ position: "relative", height: 230 }}>
      <TableCell
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
        component="th"
        scope="row"
        height={"100%"}
        width={"100%"}
      >
        <CircularProgress />
      </TableCell>
    </TableRow>
  );
};
export default TableLoading;
