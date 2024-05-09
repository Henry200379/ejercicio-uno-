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
} from "@mui/material";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia } from "@mui/material";
import Avatar from "@mui/material";


export default function Bluecard() {
  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)"
        },
        

      }}
      
    >
      <CardActionArea>
        <CardMedia
         // component={"img"}
         // image="https://via.placeholder.com/1000x200"
          //height="100" 
          //alt="una descripcion"
          
          
        />
        <Divider orientation="vertical"/>
        <CardContent>


          <Typography variant="h5">Card title</Typography>
          <Typography component={"p"} variant="body2">

            Recibe Recomendaciones Exclusivas
            Cada mes, de enero a mayo de 2024, recibirás dos
            recomendaciones curadas (un libro y una película)
            que exploran la intersección de la tecnología con
            cuestiones feministas y sociales. Seleccionamos obras
            que desafían, inspiran y amplían horizontes, priorizando
            autoras latinoamericanas.

          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button variant="contained">Add</Button>
        <Button color="error">Remove</Button>
      </CardActions>
    </Card>
  );
}
