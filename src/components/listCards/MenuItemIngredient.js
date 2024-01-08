import {
  updateModalBuy,
  updateMoreShopping,
} from "@/app/store/features/openComponents";
import { Clear, Close, ShoppingCart, Visibility } from "@mui/icons-material";
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
  Modal,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "@/app/store/features/shoppingCart";
import ModalGlobal from "../Modal/modal";
import ContentBuyProduct from "../Modal/contentBuyProduct";
import ModalBuyProduct from "../Modal/BuyProduct";

function MenuItemIngredient({ id, ingredient, item }) {
  const [cantidad, setCantidad] = useState(item.cant);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const selected = params.get("selected");
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
          gridTemplateColumns: "40% 60%",
          gridTemplateRows: "auto auto",
          position: "relative",
          rowGap: 1,
          background: selected == id && "#eee8",
        }}
      >
        <ListItemIcon
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: 1,
          }}
        >
          <Image
            fill
            title={ingredient.name}
            alt={ingredient.name}
            src={ingredient.imageUrl}
          />
        </ListItemIcon>
        <Grid>
          <Box
            display={"grid"}
            gridTemplateColumns={"80px auto auto"}
            textAlign={"center"}
            border={"1px solid #ddd"}
            borderRadius={1}
          >
            <Grid
              display={"grid"}
              textAlign={"center"}
              borderRight={"1px solid #ddd"}
              gap={1}
            >
              Cantidad
              <TextField
                sx={{ border: "none" }}
                size="small"
                onChange={(value) => setCantidad(value.target.value)}
                type="number"
                defaultValue={cantidad}
              />
            </Grid>
            <Grid display={"grid"} borderRight={"1px solid #ddd"}>
              Precio <b>Bs. {ingredient.price}</b>
            </Grid>
            <Grid display={"grid"} textAlign={"center"}>
              Total
              <b>Bs. {cantidad * ingredient.price}</b>
            </Grid>
          </Box>
          <Grid
            display={"grid"}
            gridTemplateColumns={{ sm: "auto auto" }}
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

        <ListItemText sx={{ gridRow: "2/3", gridColumn: "1/2" }}>
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
