import { TableCell, TableRow, Typography } from "@mui/material";

const TableNotHave = ({ icon, title }) => {
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
        {icon}
        <Typography variant="h6">{title}</Typography>
      </TableCell>
    </TableRow>
  );
};
export default TableNotHave;
