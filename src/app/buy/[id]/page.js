"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";

import addIngredient from "@/components/buy/addIngredient";
import useEffectBuy from "@/components/buy/useEffect";
import {
  AddShoppingCart,
  ShoppingCart,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  Divider,
  TextField,
  Hidden,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { buyProduct } from "@/services/solicitudes";
import ModalBuyProduct from "@/components/Modal/BuyProduct";

const Orders = () => {
  const router = useRouter();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const { data, params } = useEffectBuy();
  const [add, setAdd] = useState(1);
  const [quantityForBuy, setQuantityForBuy] = useState(1);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Paper sx={{ border: "1px solid #ddd" }} elevation={0}>
        <Grid
          my={{ xs: 2, md: 2.5, lg: 3 }}
          display={"grid"}
          gridTemplateColumns={{ xs: "auto", md: "50% 50%" }}
          gridTemplateRows={{ md: "auto auto auto" }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%" },
              maxWidth: "350px",
              borderRadius: 1,
              overflow: "hidden",
              mx: "auto",
              aspectRatio: 1,
              height: { xs: "auto" },
            }}
            gridRow={"1/3"}
          >
            <Image src={data.imageUrl} fill title={data.name} alt={data.name} />
          </Box>
          <Divider sx={{ mt: 4, gridColumn: { md: "1 / 3" } }} />
          <Grid
            gridColumn={{ md: "2/3" }}
            gridRow={{ md: "1/2" }}
            px={{ xs: 2, md: 3 }}
          >
            <Typography variant="h4" pt={{ xs: 3 }}>
              {data.name}
            </Typography>
            <Typography variant="h3" py={{ xs: 1 }}>
              Bs. {data.price}
            </Typography>
          </Grid>
          <Grid
            gap={2}
            display={"flex"}
            flexDirection={"column"}
            mt={3}
            width={"100%"}
            maxWidth={380}
            gridColumn={{ md: "2/3" }}
            gridRow={{ md: "2/3" }}
            px={{ xs: 2, md: 3 }}
          >
            <Grid display={"flex"} gap={1}>
              <TextField
                size="small"
                type="number"
                sx={{ width: 100 }}
                placeholder={"1"}
                label="Cantidad"
                defaultValue="1"
                onChange={(e) => setQuantityForBuy(e.target.value)}
              />
              <Button
                disabled={quantityForBuy < 1}
                variant="contained"
                endIcon={<ShoppingCartCheckout />}
                color="primary"
                sx={{ textTransform: "none" }}
                fullWidth
                onClick={() => setOpen(true)}
              >
                Comprar
              </Button>
            </Grid>

            <Grid gap={1} display={"flex"}>
              <TextField
                size="small"
                type="number"
                sx={{ width: 100 }}
                placeholder="1"
                label="Cantidad"
                defaultValue={1}
                onChange={(e) => setAdd(e.target.value)}
              />
              <Button
                disabled={add < 1}
                fullWidth
                variant="outlined"
                endIcon={<AddShoppingCart />}
                color="primary"
                onClick={() => addIngredient(dispatch, params.id, add)}
                sx={{ textTransform: "none" }}
              >
                Anadir
              </Button>
            </Grid>
            {shoppingCart.length > 0 &&
            shoppingCart.find((i) => i.id == data.id) ? (
              <Button
                fullWidth
                variant="outlined"
                endIcon={<ShoppingCart />}
                color="primary"
                onClick={() => router.push(`/shoppingCart?selected=${data.id}`)}
                sx={{
                  textTransform: "none",
                  display: "flex",
                }}
              >
                Ver Carrito
              </Button>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            mt={{ xs: 2 }}
            px={{ xs: 2, md: 3 }}
            gridColumn={{ md: "1 / 3" }}
          >
            <Typography variant="h4" pt={{ xs: 1 }}>
              Descripcion:
            </Typography>
            <Typography variant="body2" mt={{ xs: 1 }} color={"#555"}>
              {data.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <ModalBuyProduct
        product={data}
        openModal={open}
        setOpenModal={(value) => setOpen(value)}
        quantity={quantityForBuy}
      />
    </>
  );
};
export default Orders;
