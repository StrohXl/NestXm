"use client";
import Link from "next/link";

import { Add, ArrowBack } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

const { Paper, Typography, Box, Grid, Button } = require("@mui/material");

const FormOrigin = ({ title, backUrl, children, handleSubmit }) => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography mt={5} textAlign={"center"} variant="h5">
        {title}
      </Typography>
      <Box
        my={5}
        mx="auto"
        maxWidth={500}
        component={"form"}
        onSubmit={handleSubmit()}
        noValidate
      >
        {children}
        <Grid mt={5} display={"flex"} justifyContent={"space-around"}>
          <Link href={backUrl}>
            <Button startIcon={<ArrowBack />} variant="contained">
              Cancelar
            </Button>
          </Link>
          <LoadingButton endIcon={<Add />} type="submit" variant="contained">
            Agregar
          </LoadingButton>
        </Grid>
      </Box>
    </Paper>
  );
};
export default FormOrigin;
