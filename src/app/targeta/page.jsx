"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";

import { Box, Container, ThemeProvider, createTheme } from "@mui/material";

export default function Product() {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper elevation={20} 
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        marginTop: 5,
       
      }}
    >
      <Img src="https://via.placeholder.com/200" />
      <Box sx={{ flexGrow: 1,  display:"grid", gap:2}}>
        <Typography variant="h4" color={"grey"}>
          Product name
        </Typography>
        <Typography>Description</Typography>
        <Button variant="contained">Add Card</Button>
      </Box>
      <Box sx={{ marginRight: 2 }}  component={"p"}>19.99</Box>
    </Paper >
  );
}
