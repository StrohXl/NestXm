"use client";
import Dashboard from "@/components/Dashboard";
import Chart from "@/components/Dashboard/Chart";
import Deposits from "@/components/Dashboard/Deposits";
import Orders from "@/components/Dashboard/Orders";
import { useDispatch } from "react-redux";
import { Grid, Paper, Toolbar } from "@mui/material";
import { FindOne } from "../services/user";
import { useEffect } from "react";
import "../services/axios";

const Page = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    FindOne(dispatch);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Dashboard>
        <Toolbar />
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
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
      </Dashboard>
    </div>
  );
};
export default Page;
