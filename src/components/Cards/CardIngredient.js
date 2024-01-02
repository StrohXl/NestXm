"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

const CardIngredient = ({ name, imageUrl, price, id }) => {
  const [elevation, setElevation] = useState(0);
  function onMouseEnter() {
    setElevation(20);
  }
  function onMouseLeave() {
    setElevation(0);
  }
  return (
    <Link href={"/buy/" + id}>
      <Paper
        elevation={elevation}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Card sx={{ width: "100%", height: "100%" }}>
          <CardActionArea sx={{ display: "grid", height: "100%" }}>
            <Box
              height={{ xs: "20vh", sm: 200, md: 220 }}
              sx={{ aspectRatio: { xs: "1" } }}
              width={{ xs: "100%", sm: 200, md: 220 }}
              display={"flex"}
              alignItems={"center"}
              position={"relative"}
            >
              <Image
                style={{ objectFit: "cover" }}
                fill
                src={imageUrl}
                alt={name}
                title={name}
              />
            </Box>
            <CardContent sx={{ background: "#fff", height: "100%" }}>
              <Typography
                gutterBottom
                variant="h6"
                color={"#555"}
                component="div"
              >
                {name}
              </Typography>
              <Typography gutterBottom variant="h3" component="div">
                Bs. {price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Link>
  );
};
export default CardIngredient;
