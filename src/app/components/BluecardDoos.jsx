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
  Paper,
} from "@mui/material";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia } from "@mui/material";
import Avatar from "@mui/material";


export default function BluecardDoos() {
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
      <CardContent>
        <Box >
          
        <Stack direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }} fontSize="20"  >
          <Box borderRight={3} borderColor={"#504788"}>
          <img src="2.webp" alt="" />
          </Box>
          <Box >
            <Typography  fontFamily={"Calibri"}  variant="h5">Tiempo para Reflexión</Typography>
            <br></br>
            <Typography    fontFamily={"Calibri"} fontSize={17}>

              Después de recibir las recomendaciones, es hora de sumergirse en las obras.
              Tómate un tiempo para leer el libro del mes (compartiremos un cronograma)
              y ver la película, reflexionando individualmente sobre nuevas perspectivas e ideas.

            </Typography>
          </Box>
        </Stack>
       
        </Box>



      </CardContent>

    </Card>
  );
}
