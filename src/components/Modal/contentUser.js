import { useDispatch, useSelector } from "react-redux";

import { LoadingButton } from "@mui/lab";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

import StringAvatar from "../Avatar/stringAvatar";
import UploadImage from "../Form/uploadImage";
import UploadImageUser from "../Form/user/uploadImageUser";
import closeModal from "./closeModal";

const ContentUser = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.ingredient.image);
  const loading = useSelector((state) => state.button.loading1);
  return (
    <Box>
      <Typography sx={{ mb: 0.5 }} variant="h6" textAlign={"center"}>
        Cuenta de NestXm
      </Typography>
      <Typography sx={{ my: 2 }}>Imagen de perfil</Typography>
      <Divider />
      <UploadImage>
        <StringAvatar
          editUser={true}
          props={{
            mx: "auto",
            cursor: "pointer",
            mt: 3,
            bgcolor: "#9c27b0",
            color: "#fff",
            fontSize: { xs: 20, sm: 25, md: 30, lg: 35, xl: 40, "2xl": 45 },
            height: { xs: 100, sm: 120, md: 130, xl: 140, "2xl": 150 },
            width: { xs: 100, sm: 120, md: 130, xl: 140, "2xl": 150 },
          }}
        />
      </UploadImage>
      <Grid mt={3} display={"flex"} justifyContent={"space-between"}>
        <Button
          size="small"
          variant="outlined"
          onClick={() => closeModal(dispatch)}
        >
          Cancelar
        </Button>
        <LoadingButton
          loading={loading}
          disabled={image ? false : true}
          size="small"
          variant="contained"
          onClick={() => UploadImageUser(dispatch, image)}
        >
          Guardar
        </LoadingButton>
      </Grid>
    </Box>
  );
};
export default ContentUser;
