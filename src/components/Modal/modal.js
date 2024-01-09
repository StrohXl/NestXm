import { useDispatch } from "react-redux";

import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";

import closeModal from "./closeModal";

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
const ModalGlobal = ({ children, open }) => {
  const dispatch = useDispatch();

  return (
    <Modal open={open} onClose={() => closeModal(dispatch)}>
      <Box sx={style}>
        <IconButton
          color="#000"
          onClick={() => closeModal(dispatch)}
          sx={{ position: "absolute", left: 10, top: 10 }}
        >
          <Close />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};
export default ModalGlobal;
