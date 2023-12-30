import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import closeModal from "./closeModal";
import { Close } from "@mui/icons-material";

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
const ModalOpen = ({ children }) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.components.openModal);
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
export default ModalOpen;
