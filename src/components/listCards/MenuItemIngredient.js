import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { updateMoreShopping } from "@/app/store/features/openComponents";
import { deleteProduct } from "@/app/store/features/shoppingCart";
import { Clear, ShoppingCart, Visibility } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import ModalBuyProduct from "../Modal/BuyProduct";

function MenuItemIngredient({ id, ingredient, item }) {
  const [cantidad, setCantidad] = useState(item.cant);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const DeleteP = (value) => {
    console.log(value);
    dispatch(deleteProduct(id));
    dispatch(updateMoreShopping(null));
  };
  const seeProduct = () => {
    router.push(`/buy/${id}`);
    dispatch(updateMoreShopping(null));
  };

  return (
    <>
      <ListItem
        id={id}
        className={id}
        sx={{
          borderRadius: 1,
          border: "1px solid #ddd",
          py: 3,
          display: "grid",
          gridTemplateColumns: { xs: "50% 50%", sm: "50% 50%", md: "45% 55%" },
          gridTemplateRows: "auto auto",
          position: "relative",
          rowGap: 1,
        }}
      >
        <ListItemIcon
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: 1,
            gridColumn: { xs: "1/3", sm: "1/2" },
          }}
        >
          <Image
            fill
            title={ingredient.name}
            alt={ingredient.name}
            src={ingredient.imageUrl}
          />
        </ListItemIcon>
        <Grid sx={{ gridColumn: { xs: "1/3", sm: "2/3" } }}>
          <Box
            display={"grid"}
            gridTemplateColumns={{ xs: "auto", sm: "80px auto auto" }}
            textAlign={"center"}
            border={"1px solid #ddd"}
            borderRadius={1}
          >
            <Grid
              display={{ xs: "flex", sm: "grid" }}
              textAlign={"center"}
              alignItems={"center"}
              borderRight={{ xs: "none", sm: "1px solid #ddd" }}
              borderBottom={{ xs: "1px solid #ddd", sm: "none" }}
              gap={1}
              px={{ xs: 1, sm: 0 }}
              py={{ xs: 0.5, sm: 0 }}
              justifyContent={"space-between"}
            >
              Cantidad
              <TextField
                sx={{ border: "none", maxWidth: { xs: 100, sm: "auto" } }}
                size="small"
                onChange={(value) => setCantidad(value.target.value)}
                type="number"
                defaultValue={cantidad}
              />
            </Grid>
            <Grid
              display={{ xs: "flex", sm: "grid" }}
              borderRight={{ xs: "none", sm: "1px solid #ddd" }}
              borderBottom={{ xs: "1px solid #ddd", sm: "none" }}
              py={{ xs: 1, sm: 0 }}
              px={{ xs: 1, sm: 0 }}
              justifyContent={{ xs: "space-between", sm: "center" }}
            >
              Precio <b>Bs. {ingredient.price}</b>
            </Grid>
            <Grid
              py={{ xs: 1, sm: 0 }}
              px={{ xs: 1, sm: 0 }}
              display={{ xs: "flex", sm: "grid" }}
              textAlign={"center"}
              justifyContent={{ xs: "space-between", sm: "center" }}
            >
              Total
              <b>Bs. {cantidad * ingredient.price}</b>
            </Grid>
          </Box>
          <Grid
            display={"grid"}
            gridTemplateColumns={{ lg: "auto auto" }}
            gap={1}
            mt={2}
          >
            <Button
              onClick={seeProduct}
              endIcon={<Visibility />}
              sx={{ textTransform: "none" }}
              variant="outlined"
              color="primary"
            >
              Ver Producto
            </Button>
            <Button
              disabled={cantidad < 1}
              endIcon={<ShoppingCart />}
              onClick={() => setOpenModal(true)}
              sx={{ textTransform: "none" }}
              variant="contained"
              color="primary"
            >
              Comprar Producto
            </Button>
          </Grid>
        </Grid>

        <ListItemText
          sx={{ gridRow: "2/3", gridColumn: { xs: "1/3", sm: "1/2" } }}
        >
          <Typography textAlign={"center"} variant="h6">
            {ingredient.name}
          </Typography>
        </ListItemText>
        <IconButton
          sx={{
            position: "absolute",
            left: 10,
            top: 10,
          }}
          onClick={DeleteP}
        >
          <Clear
            sx={{ fontSize: { xs: 25, sm: 27.5, md: 30, xl: 32.5, "2xl": 35 } }}
          />
        </IconButton>
      </ListItem>
      <ModalBuyProduct
        openModal={openModal}
        product={ingredient}
        quantity={cantidad}
        setOpenModal={(value) => setOpenModal(value)}
      />
    </>
  );
}

export default MenuItemIngredient;
