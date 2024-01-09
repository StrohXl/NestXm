"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Box, Card, CardContent, Paper, Typography } from "@mui/material";

const CardIngredient = ({ name, imageUrl, price, id }) => {
  const [elevation, setElevation] = useState(0);
  function onMouseEnter() {
    setElevation(10);
  }
  function onMouseLeave() {
    setElevation(0);
  }
  return (
    <Link href={"/buy/" + id}>
      <Paper
        sx={{ border: "1px solid #ddd" }}
        elevation={elevation}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Card sx={{ width: "100%", height: "100%" }}>
          <Box
            height={{ xs: "20vh", sm: 200, md: 220 }}
            sx={{ aspectRatio: { xs: "1" } }}
            width={{ xs: "80%", sm: 200, md: 220 }}
            m="auto"
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
          <CardContent
            sx={{
              background: "#fff",
              height: "100%",
              p: { xs: 1, sm: 2 },
              pb: { xs: "10px !important", sm: "20px !important" },
            }}
          >
            <Typography
              gutterBottom
              variant="body2"
              color={"#555"}
              component="div"
              noWrap
              width={172}
            >
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Bs. {price}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Link>
  );
};
export default CardIngredient;
