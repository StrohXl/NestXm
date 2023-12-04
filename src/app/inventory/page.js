"use client";

import { useState } from "react";

import { CustomTabPanel } from "@/components/Tabs/tabs";
import { Box, Tab, Tabs, Typography } from "@mui/material";

const Inventory = () => {
  const [value, setValue] = useState(0);
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Typography variant="h5">Inventario</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Ingredientes" {...a11yProps(0)} />
          <Tab label="Productos" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Ingredientes
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Productos
      </CustomTabPanel>
    </>
  );
};
export default Inventory;
