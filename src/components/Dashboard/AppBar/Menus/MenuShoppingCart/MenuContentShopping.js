"use client";
import {
  deleteAllProducts,
  deleteProduct,
} from "@/app/store/features/shoppingCart";
import { FindIngredientsUser } from "@/services/user";
import { Delete, ShoppingCart } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Icon,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MenuContentShopping = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const ingredients = useSelector((state) => state.user.userIngredient);
  const DeleteP = (event, id) => {
    event.stopPropagation();
    dispatch(deleteProduct(id));
  };
  useEffect(() => {
    FindIngredientsUser(dispatch);
  }, []);
  return (
    <Box sx={{ width: { xs: 200, md: 250, "2xl": 300 } }}>
      {shoppingCart.length == 0 ? (
        <Grid p={2} display={"grid"} justifyContent={"center"} px={{ md: 3 }}>
          <Icon sx={{ height: "auto", width: "auto" }}>
            <ShoppingCart
              color="primary"
              sx={{ fontSize: { md: 50, xl: 55, "2xl": 60 } }}
            />
          </Icon>
          <Typography variant="h6" textAlign="center">
            No tienes productos
          </Typography>
        </Grid>
      ) : (
        <>
          <Grid
            px={2}
            py={1}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h6">Productos</Typography>
            <Typography
              onClick={() => dispatch(deleteAllProducts())}
              sx={{ cursor: "pointer" }}
              textAlign={"end"}
              color={"primary"}
            >
              Eliminar Todos
            </Typography>
          </Grid>
          <MenuList sx={{ py: 0, px: 1 }}>
            {shoppingCart.map((i, index) => {
              const ingredient = ingredients.find((value) => value.id == i.id);
              if (index < 5) {
                return (
                  <>
                    <MenuItem
                      key={i.id}
                      onClick={() => router.push(`/buy/${i.id}`)}
                      sx={{ borderRadius: 1 }}
                    >
                      <ListItemIcon>
                        <Avatar src={ingredient.imageUrl} />
                      </ListItemIcon>
                      <ListItemText sx={{ pr: 2 }}>
                        <Typography noWrap>{ingredient.name}</Typography>
                      </ListItemText>
                      {i.cant}
                      <IconButton
                        size="small"
                        sx={{ ml: 1 }}
                        onClick={(event) => DeleteP(event, i.id)}
                      >
                        <Delete sx={{ color: "#444" }} />
                      </IconButton>
                    </MenuItem>
                  </>
                );
              }
            })}
            {shoppingCart.length > 5 && (
              <MenuItem>
                <ListItemText sx={{ textAlign: "center" }}>
                  Ver mas
                </ListItemText>
              </MenuItem>
            )}
          </MenuList>
        </>
      )}
    </Box>
  );
};
export default MenuContentShopping;
