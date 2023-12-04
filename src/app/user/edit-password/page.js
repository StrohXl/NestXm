import Link from "next/link";

import FormPassword from "@/components/Form/FormPassword";
import { ArrowBack } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";

const EditPassword = () => {
  return (
    <>
      <Grid display={"flex"} gap={2} alignItems={"center"}>
        <Link href={"/user"}>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography variant="h5">Contraseña</Typography>
      </Grid>
      <FormPassword />
    </>
  );
};
export default EditPassword;
