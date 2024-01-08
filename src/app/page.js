"use client";

import Deposits from "@/components/Dashboard/Deposits";
import Orders from "@/components/Dashboard/Orders";
import { Box, Grid, Paper } from "@mui/material";

import "../services/axios";

const Page = () => {
  return (
    <>
      <Grid container spacing={3}>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            elevation={0}
            sx={{
              border: "1px solid #ddd",

              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{
              border: "1px solid #ddd",
              py: { xs: 2, md: 3 },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Page;
