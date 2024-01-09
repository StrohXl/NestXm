import {
  Assignment,
  Dashboard,
  Inventory2,
  LocalDining,
  ShoppingCart,
  Storefront,
} from "@mui/icons-material";

export const items = [
  {
    name: "Dashboard",
    link: "/",
    icon: <Dashboard />,
  },
  {
    name: "Ordenes",
    link: "/orders",
    icon: <Assignment />,
  },
  {
    name: "Inventario",
    icon: <Inventory2 />,
    link: "/inventory",
  },
  {
    name: "Ingredientes",
    icon: <LocalDining />,
    link: "/ingredients",
  },
  {
    name: "Comprar",
    icon: <Storefront />,
    link: "/buy",
  },
  {
    name: "Carrito",
    icon: <ShoppingCart />,
    link: "/shoppingCart",
  },
];
