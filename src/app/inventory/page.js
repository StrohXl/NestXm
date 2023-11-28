import Dashboard from "@/components/Dashboard";
import { CustomTabPanel } from "@/components/Tabs/tabs";
import { TabsIngredients } from "@/components/Tabs/tabsIngredient";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
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
    <Dashboard>
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
        <TabsIngredients />
      </CustomTabPanel>
    </Dashboard>
  );
};
export default Inventory;
