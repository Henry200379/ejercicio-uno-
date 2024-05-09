"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {
  Box,
  Container,
  Typography,
  ThemeProvider,
  createTheme,
  CardActions,
  CardActionArea,
  Divider,
  Stack,
} from "@mui/material";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia } from "@mui/material";
import Avatar from "@mui/material";
import Paper from "@mui/material";


export default function BluecardUno() {
  return (
    <Card
      variant="plain"
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)"
        },
        

      }}

    >

      <CardContent >
        <Box paddingLeft={0} >
          
            <Stack direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }} fontSize="20"  >
              <Box borderRight={3} borderColor={"#504788"}>
                <img src="1.webp" alt="" />

              </Box>

              <Box >
                <Typography paddingLeft={0}  fontFamily={"Calibri"} variant="h5">Recibe Recomendaciones Exclusivas</Typography>
                <br></br>
                <Typography paddingLeft={0}    variant="body2" fontFamily={"Calibri"} fontSize={17}>

                  Cada mes, <b>de enero a mayo de 2024</b>, recibirás dos
                  recomendaciones curadas (un libro y una película)
                  que exploran la intersección de la tecnología con
                  cuestiones feministas y sociales.
                  Seleccionamos obras que desafían, inspiran y
                  amplían horizontes, priorizando autoras latinoamericanas.

                </Typography>
              </Box>
            </Stack>

          
        </Box>
      </CardContent>

    </Card>
  );
}
