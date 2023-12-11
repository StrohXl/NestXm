"use client";

import Deposits from "@/components/Dashboard/Deposits";
import Orders from "@/components/Dashboard/Orders";
import { Grid, Paper } from "@mui/material";

import "../services/axios";
import { useEffect } from "react";
import { FindOne } from "@/services/user";
import { useDispatch } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    FindOne(dispatch);
  }, []);
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
