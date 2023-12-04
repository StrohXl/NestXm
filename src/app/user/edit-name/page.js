import Link from "next/link";

import FormName from "@/components/Form/FormName";
import { ArrowBack } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";

const EditName = () => {
  return (
    <>
      <Grid display={"flex"} gap={2} alignItems={"center"}>
        <Link href={"/user"}>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography variant="h5">Nombre</Typography>
      </Grid>
      <FormName />
    </>
  );
};
export default EditName;
