"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";

import { Close, AddPhotoAlternateOutlined } from "@mui/icons-material";
import { Grid, IconButton, Paper, Typography } from "@mui/material";

import cancelImage from "../cancelImage";
import UploadImage from "../uploadImage";

const UploadImageIngredient = () => {
  const dispatch = useDispatch();

  const image = useSelector((state) => state.ingredient.image);
  const errorImage = useSelector((state) => state.ingredient.errorImage);
  const [elevation, setElevation] = useState(1);

  return (
    <Grid display={"grid"} justifyContent={"left"}>
      <Typography
        component={"label"}
        variant="body1"
        color={errorImage ? "#d32f2f" : "gray"}
      >
        Imagen *
      </Typography>
      <UploadImage>
        <Paper
          onMouseEnter={() => setElevation(5)}
          onMouseLeave={() => setElevation(1)}
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
              onClick={(event) => cancelImage(event, dispatch)}
              sx={{ position: "absolute", right: 0, top: 0 }}
            >
              <Close />
            </IconButton>
          )}
          {image ? (
            <Image
              alt="uploadImage"
              fill
              style={{ objectFit: "cover", width: "90%" }}
              src={
                typeof image == "object" ? URL.createObjectURL(image) : image
              }
            />
          ) : (
            <AddPhotoAlternateOutlined
              sx={{ fontSize: { xs: 35, md: 40, xl: 45 } }}
              color={"disabled"}
            />
          )}
        </Paper>
      </UploadImage>
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
export default UploadImageIngredient;
