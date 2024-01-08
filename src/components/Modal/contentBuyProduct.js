import {
  Avatar,
  Box,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import closeModal from "./closeModal";
import { buyProduct } from "@/services/solicitudes";

function ContentBuyProduct({ ingredient, total, setOpenModal, cantidad }) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const comprarProducto = async () => {
    const res = await buyProduct(
      [{ idIngredient: ingredient.id, quantity: cantidad }],
      dispatch
    );
    if (res) {
      setOpenModal(false);
    }
  };

  return (
    <Box>
      <Typography ml={3} variant="h5">
        Comprar
      </Typography>
      <Grid
        mt={3}
        mb={3}
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography component={"h2"} variant="h6">
          Saldo disponible:{" "}
        </Typography>
        {user.money ? user.money : 0} Bs
      </Grid>
      <Divider />
      <Typography mt={2} component={"h2"} variant="h5" mb={2}>
        Producto
      </Typography>
      <MenuList sx={{ display: "flex" }}>
        <ListItem>
          <ListItemIcon>
            <Avatar src={ingredient.imageUrl} />
          </ListItemIcon>
          <ListItemText>
            <Grid display={"flex"} justifyContent={"space-between"}>
              Cantidad: <span>{cantidad}</span>
            </Grid>
            <Grid display={"flex"} justifyContent={"space-between"}>
              Total: <span>{total}</span>
            </Grid>
          </ListItemText>
        </ListItem>
      </MenuList>
      <Divider />
      <Grid
        mt={3}
        mb={3}
        display={total > user.money ? "none" : "flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography component={"h2"} variant="h6">
          Saldo Restante:{" "}
        </Typography>
        {user.money - total} Bs
      </Grid>
      <Typography
        mt={3}
        display={total > user.money ? "block" : "none"}
        textAlign={"end"}
        color={"red"}
        component={"h2"}
        variant="body2"
      >
        Saldo Insuficiente
      </Typography>
      <Grid mt={4} display="flex" justifyContent={"space-between"}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpenModal(false)}
        >
          Cancelar
        </Button>
        <Button
          disabled={total > user.money || cantidad < 1}
          variant="contained"
          color="primary"
          onClick={comprarProducto}
        >
          Comprar
        </Button>
      </Grid>
    </Box>
  );
}

export default ContentBuyProduct;
