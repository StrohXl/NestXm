"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";

import {
  updateImage,
  updateOnChangeInImage,
} from "@/app/store/features/formIngredient";
import { Box } from "@mui/material";

const accepTypeFiles = {
  "image/jpeg": [".png", ".jpg", ".jpeg"],
  "image/png": [".png", ".jpg", ".jpeg"],
  "image/jpg": [".png", ".jpg", ".jpeg"],
};

const UploadImage = ({ children }) => {
  const dispatch = useDispatch();
  const onDrop = useCallback((accetedFiles) => {
    dispatch(updateImage(accetedFiles[0]));
    dispatch(updateOnChangeInImage(true));
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: accepTypeFiles,
    multiple: false,
    maxFiles: 1,
    maxSize: 1048576,
  });

  return (
    <Box component={"div"} {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </Box>
  );
};
export default UploadImage;
