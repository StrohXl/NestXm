"use client";

import Deposits from "@/components/Dashboard/Deposits";
import Orders from "@/components/Dashboard/Orders";
import { Grid, Paper } from "@mui/material";

import "../services/axios";

const Page = () => {
  return (
    <>
      <Grid container spacing={3}>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Page;
