import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useRouter } from "next/navigation";
import { Inventory2 } from "@mui/icons-material";

export const MainListItems = () => {
  const router = useRouter();
  const items = [
    {
      name: "Dashboard",
      link: "/",
      icon: <DashboardIcon />,
    },
    {
      name: "Ordenes",
      link: "/orders",
      icon: <ShoppingCartIcon />,
    },
    {
      name: "Clientes",
      icon: <PeopleIcon />,
      link: "/customers",
    },
    {
      name: "Inventario",
      icon: <Inventory2 />,
      link: "/inventory",
    },
    {
      name: "Ingredientes",
      icon: <Inventory2 />,
      link: "/ingrediente",
    },
  ];
  return (
    <>
      {items.map((i, index) => {
        return (
          <ListItemButton key={index} onClick={() => router.push(i.link)}>
            <ListItemIcon>{i.icon}</ListItemIcon>
            <ListItemText primary={i.name} />
          </ListItemButton>
        );
      })}
    </>
  );
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
