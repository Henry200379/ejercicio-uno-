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


export default function BluecardTres() {
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
                <img src="3.webp" alt="" />

              </Box>

              <Box >
                <Typography paddingLeft={0}  fontFamily={"Calibri"} variant="h5">Recibe Recomendaciones Exclusivas</Typography>
                <br></br>
                <Typography paddingLeft={0}    variant="body2" fontFamily={"Calibri"} fontSize={17}>

              Una vez finalizada la lectura, únete a una
              vibrante comunidad en línea a través de nuestro foro
              y encuentros exclusivos en línea. Aquí, puedes compartir
              tus impresiones, ideas y reflexiones mediante publicaciones
              e imágenes. Éste es el espacio perfecto para tener
              discusiones profundas y constructivas en un ambiente seguro,
              libre de juicios y críticas.
            </Typography>
          </Box>
        </Stack>
       
        </Box>
       
      </CardContent>



    </Card>
  );
}
