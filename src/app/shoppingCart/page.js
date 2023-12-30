"use client";
import {
  Avatar,
  Box,
  Grid,
  Icon,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { styled } from "@mui/material";
import { FindIngredientsUser } from "@/services/user";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllProducts,
  deleteProduct,
} from "../store/features/shoppingCart";
import { Delete } from "@mui/icons-material";

const PaperStyled = styled(Paper)(() => ({
  "& .MuiBox-root": {
    width: "100%",
  },
}));

function ShoppingCart() {
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
    <>
      <Typography variant="h2">Carrito</Typography>
      <PaperStyled
        sx={{
          mt: 3,
          p: 2,
          display: "grid",
        }}
      >
        <Box sx={{ width: { xs: 200, md: 250, "2xl": 300 } }}>
          {shoppingCart.length == 0 ? (
            <Grid
              p={2}
              display={"grid"}
              justifyContent={"center"}
              px={{ md: 3 }}
            >
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
                  const ingredient = ingredients.find(
                    (value) => value.id == i.id
                  );

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
                        <Grid>
                          <IconButton
                            size="small"
                            sx={{ ml: 1 }}
                            onClick={(event) => DeleteP(event, i.id)}
                          >
                            <Delete sx={{ color: "#444" }} />
                          </IconButton>
                          <IconButton size="small" sx={{ ml: 1 }}>
                            <ShoppingCart color="primary" />
                          </IconButton>
                        </Grid>
                      </MenuItem>
                    </>
                  );
                })}
              </MenuList>
            </>
          )}
        </Box>
      </PaperStyled>
    </>
  );
}

export default ShoppingCart;
