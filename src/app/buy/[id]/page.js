"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Image from "next/image";

import addIngredient from "@/components/buy/addIngredient";
import useEffectBuy from "@/components/buy/useEffect";
import { AddShoppingCart, ShoppingCartCheckout } from "@mui/icons-material";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  Divider,
  TextField,
} from "@mui/material";

const Orders = () => {
  const { data, params } = useEffectBuy();
  const [add, setAdd] = useState(1);
  const dispatch = useDispatch();
  return (
    <>
      <Paper sx={{ py: { xs: 2 }, px: { xs: 2 } }}>
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
          <Divider sx={{ mt: 4, gridColumn: { md: "1 / 3" }, mx: { md: 3 } }} />
          <Grid
            gridColumn={{ md: "2/3" }}
            gridRow={{ md: "1/2" }}
            px={{ md: 3 }}
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
            mx={"auto"}
            width={"100%"}
            maxWidth={{ sm: "500px", md: "100%" }}
            gridColumn={{ md: "2/3" }}
            gridRow={{ md: "2/3" }}
            px={{ md: 3 }}
          >
            <Grid display={"flex"} gap={1}>
              <TextField
                size="small"
                type="number"
                sx={{ width: 100 }}
                placeholder="1"
                label="Cantidad"
                defaultValue={1}
                onChange={(e) => console.log(e.target.value)}
              />
              <Button
                variant="contained"
                endIcon={<ShoppingCartCheckout />}
                color="primary"
                sx={{ textTransform: "none" }}
                fullWidth
              >
                Comprar
              </Button>
            </Grid>
            <Grid display={"flex"} gap={1}>
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
          </Grid>
          <Grid mt={{ xs: 2 }} px={{ md: 3 }} gridColumn={{ md: "1 / 3" }}>
            <Typography variant="h4" pt={{ xs: 1 }}>
              Descripcion:
            </Typography>
            <Typography variant="body2" mt={{ xs: 1 }} color={"#555"}>
              {data.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default Orders;
