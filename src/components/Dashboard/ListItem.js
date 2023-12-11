import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useRouter, usePathname } from "next/navigation";

import {
  updatedDrawer,
  updatedDrawerMobile,
} from "@/app/store/features/openDrawer";
import { Inventory2, LocalDining } from "@mui/icons-material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Tooltip } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export const MainListItems = ({ mobile }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const path = usePathname();
  const openDrawer = useSelector((state) => state.drawer.openDrawer);

  const changeUrl = (link) => {
    router.push(link);
    dispatch(updatedDrawer(false));
    dispatch(updatedDrawerMobile(false));
  };

  const items = [
    {
      name: "Dashboard",
      link: "/",
      icon: <DashboardIcon color={path == "/" ? "primary" : "default"} />,
    },
    {
      name: "Ordenes",
      link: "/orders",
      icon: (
        <ShoppingCartIcon color={path == "/orders" ? "primary" : "default"} />
      ),
    },
    {
      name: "Inventario",
      icon: <Inventory2 color={path == "/inventory" ? "primary" : "default"} />,
      link: "/inventory",
    },
    {
      name: "Ingredientes",
      icon: (
        <LocalDining color={path == "/ingredients" ? "primary" : "default"} />
      ),
      link: "/ingredients",
    },
  ];
  if (!mobile) {
    return (
      <>
        {items.map((i, index) => {
          return (
            <Tooltip
              color="primary"
              placement="right"
              key={index}
              title={!openDrawer && i.name}
            >
              <ListItemButton
                selected={path == i.link}
                onClick={() => changeUrl(i.link)}
              >
                <ListItemIcon>{i.icon}</ListItemIcon>
                <ListItemText primary={i.name} />
              </ListItemButton>
            </Tooltip>
          );
        })}
      </>
    );
  }
  return (
    <>
      {items.map((i, index) => {
        return (
          <ListItemButton
            selected={path == i.link}
            key={index}
            onClick={() => changeUrl(i.link)}
          >
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
