import { Skeleton, TableCell, TableRow } from "@mui/material";

const BoxCircularProgress = () => {
  return (
    <TableRow sx={{ position: "relative", height: 400 }}>
      <TableCell
        sx={{
          position: "absolute",
        }}
        component="th"
        scope="row"
        height={"100%"}
        width={"100%"}
      >
        <Skeleton height={60} animation="pulse" />
        <Skeleton height={60} animation="pulse" />
        <Skeleton height={60} animation="pulse" />
        <Skeleton height={60} animation="pulse" />
        <Skeleton height={60} animation="pulse" />
        <Skeleton height={60} animation="pulse" />
      </TableCell>
    </TableRow>
  );
};
export default BoxCircularProgress;
