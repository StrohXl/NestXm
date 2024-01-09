import React from "react";

import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";

import ContentBuyProduct from "../contentBuyProduct";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 400,
  borderRadius: 1,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  p: 4,
  pt: 2,
};

function ModalBuyProduct({ openModal, setOpenModal, product, quantity }) {
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <Box sx={style}>
        <IconButton
          color="#000"
          onClick={() => setOpenModal(false)}
          sx={{ position: "absolute", left: 10, top: 10 }}
        >
          <Close />
        </IconButton>
        <ContentBuyProduct
          ingredient={product}
          total={quantity * product.price}
          cantidad={quantity}
          setOpenModal={(value) => setOpenModal(value)}
        />
      </Box>
    </Modal>
  );
}

export default ModalBuyProduct;
