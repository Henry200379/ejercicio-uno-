import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack } from '@mui/material';
import Cards from './Cards';
import { Container } from 'postcss';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import SimpleRating from './Estrellas';
import Divider from '@mui/material/Divider';
import { red } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';



export default function CardsAllDos() {
  return (
    <>

      <Grid item xs={12} sm={6} >
        <Stack direction={{ xs: 'column', sm: 'row' }}
        >
          <Box >
            <Grid item xs={12} sm={6} >

              <Card
                variant="plain"
                sx={{
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.05)"
                  },


                  width: 520



                }}

              >

                <CardContent >
                  <Box >

                    <Stack direction={{ xs: 'column', sm: 'row' }}
                      spacing={{ xs: 1, sm: 2, md: 4 }} fontSize="20"  >
                      <Box borderRight={3} borderColor={"#504788"} fontSize={10}>
                        <img src="1.png" alt=""/>

                      </Box>

                      <Box >
                        <Typography paddingLeft={0} fontFamily={"Calibri"} variant="h5">Recibe Recomendaciones Exclusivas</Typography>
                        <br></br>
                        <Typography paddingLeft={0} variant="body2" fontFamily={"Calibri"} fontSize={17}>

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

            </Grid>
          </Box>

          <Box >
            <Grid item xs={12} sm={6} >

              <Card sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",

                },

                justifyContent: "left",
                alignItems: "left",
                width: 480,
                height: 220,
                paddingLeft: 2


              }}


              >

                <CardHeader justifyContent="left"
                  avatar={
                    <Avatar src='Anna.WEBP' aria-label="recipe" >

                    </Avatar>
                  }

                  action={
                    <IconButton aria-label="settings">

                      <SimpleRating />
                    </IconButton>
                  }

                  title="Anna Silva"
                  subheader="Marketing, Brasil"

                />
                <Divider />
                <CardContent>

                  <Typography variant="body2" color="text.secondary">
                    “Eureka Club me proporcionó un viaje increíble
                    de aprendizaje y reflexión sobre la justicia
                    social. Participar en el club me hizo replantear
                    mi visión del mundo.Lo recomiendo a todos los que
                    deseen expandir sus horizontes y actuar en pro de
                    la justicia.”
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
          </Box>

        </Stack >
      </Grid>

    </>
  );
}
