"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";

import {
  updateImage,
  updateOnChangeInImage,
} from "@/app/store/features/formIngredient";
import { Close } from "@mui/icons-material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Grid, IconButton, Paper, Typography } from "@mui/material";

const UploadImage = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.ingredient.image);
  const errorImage = useSelector((state) => state.ingredient.errorImage);
  const [elevation, setElevation] = useState(1);
  const onDrop = useCallback((accetedFiles) => {
    dispatch(updateImage(accetedFiles[0]));
    dispatch(updateOnChangeInImage(true));
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const cancelImage = (event) => {
    event.stopPropagation();
    dispatch(updateImage(null));
  };

  return (
    <Grid display={"grid"} justifyContent={"left"}>
      <Typography
        component={"label"}
        variant="body1"
        color={errorImage ? "#d32f2f" : "gray"}
      >
        Imagen *
      </Typography>
      <Paper
        onMouseEnter={() => setElevation(5)}
        onMouseLeave={() => setElevation(1)}
        {...getRootProps()}
        sx={{
          ml: 1.5,
          mt: 2,
          cursor: "pointer",
          width: { xs: "120px", md: "150px" },
          height: { xs: "120px", md: "150px" },
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={elevation == 5 ? 8 : 2}
      >
        {image && (
          <IconButton
            onClick={cancelImage}
            sx={{ position: "absolute", right: 0, top: 0 }}
          >
            <Close />
          </IconButton>
        )}
        <input {...getInputProps()} />
        {image ? (
          <img
            style={{ width: "90%", height: "90%" }}
            src={typeof image == "object" ? URL.createObjectURL(image) : image}
          />
        ) : (
          <AddPhotoAlternateIcon
            sx={{ fontSize: { xs: 35, md: 40, xl: 45 } }}
            color={"disabled"}
          />
        )}
      </Paper>
      {errorImage && (
        <Typography
          sx={{ mt: 2, ml: 1.5 }}
          component={"span"}
          variant="caption"
          color={"#d32f2f"}
        >
          Suba una imagen
        </Typography>
      )}
    </Grid>
  );
};
export default UploadImage;
