'use client'
import { document } from "postcss";
import React from "react";
import { ReactDOM } from "react";
import { ReactElement } from "react";
import { ReactComponentElement } from "react";

import { Stack, Box, AppBar, Toolbar, IconButton, ImageList, ImageListItem, Typography, Grid, Container, Button, Paper, ListItem } from "@mui/material";

import Link from "next/link";

import { Block } from "@mui/icons-material";

import { Headland_One } from "next/font/google";
import Acordion from "../components/Acordion.jsx";

import PiePagina from "../components/PiePagina.jsx"


import styled from "styled-components";
import CardsAllll from "../components/CardsAllll";

import AutoPlay from "../components/CarrouselReact.jsx"
import AutoPlayDos from "../components/CarrouselReactDos.jsx"
import FloatingActionButtons from "../components/Flotante.jsx"

import Styles from "../styles/Container.module.css"
import { Fragment } from 'react';
import ScrollButton from '../components/ScrollButton';









const WhiteLink = styled.a`
  color: white;
`


export default function ejemplosf() {
    //const Item = styled(Paper)(({ theme }) => ({

    //}));
    return (
        <>


            <AppBar elevation={0} sx={{ height: 72, backgroundColor: "transparent" }}>

                <Toolbar sx={{ backgroundColor: "#ecf0f1" }}>
                    <ImageListItem sx={{ boxSizing: "border-box", paddingLeft: 0, width: 350, height: 350 }}>
                        <img src="/logo.webp" />
                    </ImageListItem>
                </Toolbar>

            </AppBar>





            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>


                </Box>
            </Box>



            <Typography backgroundColor="#ecf0f1" maxWidth="100%" boxSizing={"border-box"} fontFamily={'Helvetica'}
                fontSize={"40px"} textAlign="center">
                Tecnología desde miradas feministas


            </Typography>
            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>

                </Box>
            </Box>

            <Box backgroundColor="#ecf0f1" maxWidth={'100%'} boxSizing={"border-box"} display='flex' marginTop={0} alignItems={'center'} justifyContent={'center'}>
                <Box width={600} boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Typography maxWidth={600} boxSizing={"border-box"} fontFamily={'Open Sans, Helvetica'} fontSize={19} textAlign="center">
                        El club de lectura y cine para personas que desean descubrir,
                        aprender e imaginar un mundo diferente.


                    </Typography>
                </Box>
            </Box>
            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>


                </Box>
            </Box>
            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display='flex' marginTop={0} alignItems={'center'} justifyContent={'center'}>
                <Box maxWidth={600} boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>


                    <Typography maxWidth={600} boxSizing={"border-box"} fontFamily={'Open Sans, Helvetica'} fontSize={17} textAlign="center">
                        <b>Cada mes, durante 5 meses,</b> recibirás recomendaciones de libros y
                        películas increíbles sobre <b>género, tecnología y feminismo,</b>
                        perfectos para aprender,
                        reflexionar y debatir en <b>nuestra comunidad exclusiva.</b>
                    </Typography>
                </Box>
            </Box>
            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>



                </Box>
            </Box>
            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display='flex' marginTop={0} alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Typography maxWidth={600} boxSizing={"border-box"} fontFamily={'Headland One'} fontSize={19} textAlign="center">
                        <Button sx={{
                            backgroundColor: "#81ecec ", color: 'black', fontStyle: 'bold', borderColor: 'black', '&:hover': {
                                backgroundColor: 'White',
                                borderColor: 'black',
                                boxShadow: 'none',
                            },


                        }} variant='outlined' href="https://www.eureka.club/es/join/25" ><b>Inscríbete en el club</b></Button>
                    </Typography>
                </Box>

            </Box>
            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>
                </Box>
            </Box>

            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display='flex' marginTop={0} alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Typography maxWidth={600} boxSizing={"border-box"} fontFamily={'Headland One'} fontSize={15} textAlign="center">





                        Y la mejor parte: <b>!Es gratuito!<img width={25} height={25} src="/Emot.png" /></b>


                    </Typography>
                </Box>
            </Box>

            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>
                    <br></br>
                </Box>
            </Box>


            <Box backgroundColor="#ecf0f1" alignItems={'center'} justifyContent={'center'}>
                <Box alignItems={'center'} justifyContent={'center'} >

                    <AutoPlay />
                </Box>
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br>




            <Typography boxSizing={"border-box"} fontFamily={'Headland One'} fontSize={30} textAlign="center">

                ¿Cómo Funciona?

            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>

                    <CardsAllll />


                </Box>
            </Box >

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Typography maxWidth={450} boxSizing={"border-box"} fontFamily={'Bookman Old Style'} fontSize={30} textAlign="center">

                        Únete a más de 500 personas en nuestra comunidad


                    </Typography>


                </Box>
            </Box>

            <br></br>
            <br></br>
            <br></br>



            <Box alignItems={'center'} justifyContent={'center'}>
                <Box alignItems={'center'} justifyContent={'center'} >

                    <AutoPlayDos />
                </Box>
            </Box>

            <br></br>

            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>
                    <br></br>

                </Box>
            </Box>
            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Typography maxWidth={450} boxSizing={"border-box"} fontFamily={'Bookman Old Style'} fontSize={30} textAlign="center">

                        ¿Para Quién es el Club de Lectura y Cine 'Tecnología desde miradas feministas'?

                    </Typography>

                </Box>
            </Box>
            <Box backgroundColor="#ecf0f1" >
                <Box display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Grid justifyItems={"center"} display='flex' container spacing={4} item xs={12} alignItems={'center'} justifyContent={'center'}>
                        <Grid justifyItems={"center"} item xs={12}
                            sm={6}
                            md={4}
                            fontFamily="Book antigua"

                        >
                            <br></br>
                            <br></br>
                            ✓ Para quienes quieran leer y ver más obras de autoría latinoamericana.
                            <br></br>
                            <br></br>
                            ✓ Para quienes deseen profundizar en temas contemporáneos.
                            <br></br>
                            <br></br>
                            ✓ Para quienes ya no quieran participar en debates en redes sociales que a menudo terminan en peleas, falta de respeto y agresividad.
                            <br></br>
                            <br></br>
                            ✓ Para quienes tengan curiosidad sobre el papel de la IA y la tecnología en la construcción de futuros innovadores y posibles.
                            <br></br>
                            <br></br>
                            ✓ Para quienes tengan interés en comprender cómo temas como la tecnología y la IA impactan su vida, su comunidad y el mundo.
                        </Grid>

                        <Grid justifyItems={"center"} item xs={12}
                            sm={6}
                            md={4}
                            fontFamily="Book antigua"

                        >

                            ✓ Para quienes quieran conectar con personas que comparten su interés por la tecnología, el feminismo y la justicia social.
                            <br></br>
                            <br></br>
                            ✓ Para quienes deseen expandir horizontes, y sean amantes de la lectura, películas y el aprendizaje.
                            <br></br>
                            <br></br>
                            ✓ Para quienes busquen un ambiente seguro y libre de juicios. Un espacio donde tus ideas son valoradas y las conversaciones son constructivas.
                            <br></br>
                            <br></br>
                            ✓ Para personas apasionadas por la justicia social, que buscan ser agentes de cambio positivo y contribuir a un futuro mejor.



                        </Grid>

                    </Grid>

                </Box>
                <br></br>
                <br></br>
            </Box>

            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Typography maxWidth={600} boxSizing={"border-box"} fontFamily={'arial'} fontSize={19} textAlign="center">


                        <Button sx={{
                            backgroundColor: "#81ecec ", color: 'black', fontStyle: 'bold', borderColor: 'black', '&:hover': {
                                backgroundColor: 'White',
                                borderColor: 'black',
                                boxShadow: 'none',
                            },


                        }} variant='outlined' href="https://www.eureka.club/es/join/25"  ><b>Inscríbete en el club</b></Button>



                    </Typography>
                </Box>
            </Box>

            <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                <Box backgroundColor="#ecf0f1" boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Typography maxWidth={600} backgroundColor="#ecf0f1" boxSizing={"border-box"} fontFamily={'Book antigua'} fontSize={15} textAlign="center">
                        <br></br>

                        Y la mejor parte: <strong>!Es gratuito!<img width={25} height={25} src="/Emot.png" /></strong>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                    </Typography>


                </Box>
            </Box>

            <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </Box>
            </Box>



            <Typography boxSizing={"border-box"} fontFamily={'Bookman Old Style'} fontSize={30} textAlign="center">

                ¿Tienes Dudas?

            </Typography>
            <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>

                    <br></br>

                </Box>
            </Box>

            <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                <Box borderColor={"#c8d6e5"} boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>

                    <Acordion />

                </Box>
            </Box>
            <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>

                    <br></br>
                    <br></br>
                    <br></br>
                </Box>
            </Box>

            <Box backgroundColor="#00cec9" boxSizing={"border-box"} display='flex' marginTop={0} alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>

                    <Typography maxWidth={600} backgroundColor="#00cec9" boxSizing={"border-box"} fontFamily={'arial'}
                        variant="h4" textAlign="center">
                        <br></br>
                        ¿Qué Esperas?

                        <br></br>
                    </Typography>


                </Box>

            </Box>
            <Box backgroundColor="#00cec9" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>

                </Box>
            </Box>
            <Box backgroundColor="#00cec9" boxSizing={"border-box"} display='flex' marginTop={0} alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Typography maxWidth={600} boxSizing={"border-box"} fontFamily={'arial'} fontSize={19} textAlign="center">
                        ¡Ha llegado el momento de encontrar tu
                        comunidad y expandir tus horizontes! El club de lectura
                        <b>‘Tecnología desde miradas feministas’</b> da inicio en enero 2024.

                    </Typography>
                </Box>

            </Box>
            <Box backgroundColor="#00cec9" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>

                </Box>
            </Box>
            <Box backgroundColor="#00cec9" boxSizing={"border-box"} display='flex' marginTop={0} alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Typography maxWidth={500} boxSizing={"border-box"} fontFamily={'arial'} fontSize={16} textAlign="center">

                        ¡Eureka es el primer club de lectura y cine enfocado en la justicia social para América Latina!
                        Cada mes, durante 5 meses, recibirás recomendaciones de libros y películas increíbles sobre género, tecnología
                        y feminismo, ideales para aprender, reflexionar y debatir con una comunidad exclusiva.

                    </Typography>
                </Box>

            </Box>
            <Box backgroundColor="#00cec9" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>

                </Box>
            </Box>

            <Box backgroundColor="#00cec9" boxSizing={"border-box"} display='flex' marginTop={0} alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Typography maxWidth={600} boxSizing={"border-box"} fontFamily={'arial'} fontSize={19} textAlign="center">


                        <Button sx={{
                            backgroundColor: "#81ecec ", color: 'black', fontStyle: 'bold', borderColor: 'black', '&:hover': {
                                backgroundColor: 'White',
                                borderColor: 'black',
                                boxShadow: 'none',
                            },


                        }} variant='outlined' href="https://www.eureka.club/es/join/25" ><b>Inscríbete en el club</b></Button>

                    </Typography>
                </Box>

            </Box>
            <Box backgroundColor="#00cec9" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>

                </Box>
            </Box>
            <Box backgroundColor="#00cec9" boxSizing={"border-box"} display='flex' marginTop={0} alignItems={'center'} justifyContent={'center'}>
                <Box boxSizing={"border-box"} display='flex' alignItems={'center'} justifyContent={'center'}>
                    <Typography maxWidth={600} boxSizing={"border-box"} fontFamily={'book antigua'} fontSize={15} textAlign="center">





                        Y la mejor parte: <b>!Es gratuito!</b><img width={25} height={25} src="/Emot.png" />


                    </Typography>
                </Box>

            </Box>

            <Box backgroundColor="#00cec9" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <br></br>

                </Box>
            </Box>



            <Box backgroundColor="#535c68" boxSizing={"border-box"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box display={"flex"} boxSizing={"border-box"} alignItems={"center"} justifyContent={"center"} >
                    <Stack padding={0} display={"flex"} backgroundColor="#535c68" direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <PiePagina />
                        <ScrollButton />
                    </Stack>
                </Box>
            </Box>


        </>
    );
}

