'use client'
import { document } from "postcss";
import React from "react";
import { ReactDOM } from "react";
import { ReactElement } from "react";
import { ReactComponentElement } from "react";
import Ejemplos from "../components/Ejemplos"
import AccordionUsage from "../components/Acordion.jsx"
import SwipeableTextMobileStepper from '../components/Carousel'
import SimpleAccordion from '../components/AcordionDos'
import SimpleSlider from '../components/CarouselDos'
import App from '../components/Slider'
import NavbarDos from "../components/navbar/NavarDos"
import { Stack, Box, AppBar, Toolbar, IconButton, ImageList, ImageListItem, Typography, Grid, Container, Button, Paper } from "@mui/material";
import Bluecard from "../components/Bluecard";
import TypografiaUno from "../components/TypografiaUno";
import TypografiaDos from "../components/TipografiaDos"
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import Carousel from '../components/CarouselGPT'
import AccordionTres from '../components/AcordionTres';
import AcordionTres from "../components/AcordionTres";
import ControlledAccordions from '../components/Acordion'
import { Block } from "@mui/icons-material";
import Bluecardos from "../components/AvartarCard"
import CardDos from "../components/CardDos"
import SimpleRating from "../components/Estrellas"
import CardUno from "../components/CardUno"
import CardTres from "../components/CardTres"
import BluecardUno from "../components/BluecardUno"
import BluecardDoos from "../components/BluecardDoos"
import BluecardTres from "../components/BluecardTres"
import { Headland_One } from "next/font/google";




export default function () {

    return (


        <Container display='flex' width='100vw'
        >

            <Box paddingBlockEnd={5} marginBlockEnd={5}>
                <AppBar elevation={0} sx={{ height: 62, background: "white", borderRadius: 0 }}>
                    <Box  >
                        <Toolbar alignItems="left" >
                            <Box paddingBlockEnd={7}>
                                <ImageListItem sx={{ width: 350, }}>
                                    <img src="/Logo.png" />
                                </ImageListItem>
                            </Box>
                        </Toolbar>


                    </Box>
                </AppBar>
            </Box>
            <br></br>



            <Box display='flex' marginTop={5} width='80vw' height='60vh' alignItems={'center'} justifyContent={'center'}>

                <Paper elevation={0}>

                    <Box display='flex' maxWidth={800} alignItems={'center'} justifyContent={'center'}>


                        <Typography paddingTop={20} fontFamily={'cascadia code'}
                            variant="h4" textAlign="center"  >
                            Tecnología desde miradas feministas
                            <Paper elevation={0}>
                                <Box display='flex' maxWidth={700} alignItems={'center'} justifyContent={'center'}>
                                    <Typography fontFamily={'arial'} fontSize={19}


                                        sx={{ paddingInline: 7, paddingTop: 2, marginLeft: 5 }}>
                                        El club de lectura y cine para personas que desean descubrir,
                                        aprender e imaginar un mundo diferente.
                                    </Typography>

                                </Box>
                                <Paper elevation={0}>
                                    <Typography fontSize={16} fontFamily={'arial'} alignContent={'center'} justifyContent={'center'}
                                        textAlign={'center'} sx={{ paddingBlockEnd: 14, paddingTop: 2, paddingInline: 10 }}>

                                        <p textAlign='center'  >
                                            <strong>Cada mes, durante 5 meses,</strong> recibirás recomendaciones de libros y
                                            películas increíbles sobre <strong>género, tecnología y feminismo,</strong>
                                            perfectos para aprender,
                                            reflexionar y debatir en <strong>nuestra comunidad exclusiva.</strong>
                                        </p>
                                        <Button sx={{ backgroundColor: "#81ecec", color: 'black', fontStyle: 'bold', borderColor: 'black' }} variant='outlined'>Inscríbete en el club</Button>
                                        <Typography fontFamily='Times New Roman'>
                                            <p >
                                                Y la mejor parte: <strong>!Es gratuito!<img width={25} height={25} src="/Emot.png" /></strong>
                                            </p>
                                            <Box display='flex' width='80vw'
                                                justifyContent='center' alignItems='center'  >

                                                <Box display='flex' maxWidth={400} alignItems={'center'} justifyContent={'center'}>
                                                    <Typography fontFamily={'Century'}
                                                        variant="h4" textAlign="center" >¿Cómo Funciona?
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Typography>
                                    </Typography>
                                </Paper>
                            </Paper>
                        </Typography>



                    </Box>
                </Paper>

            </Box>

            <br></br>
            <br></br>

            <Box>

            </Box>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <Box display='flex' width='80vw' alignItems={'center'} justifyContent={'center'}>
                <Grid display='flex' width={400} container spacing={3} item xs={12} alignItems={'center'} justifyContent={'center'}>
                    <Grid item xs={12}
                        sm={6}
                        md={5}
                    >
                        <p>
                            <BluecardUno />
                            <br></br>
                            <BluecardDoos />
                            <br></br>
                            <BluecardTres />
                        </p>
                    </Grid>
                    <br></br>
                    <Grid item xs={12}
                        sm={6}
                        md={5}>
                        <p>
                            <CardUno />
                            <br></br>
                            <CardDos />
                            <br></br>
                            <CardTres />
                        </p>
                    </Grid>
                    <Grid item xs={12}
                        sm={6}
                        md={6}>
                        <p>

                        </p>
                    </Grid>
                    <Grid item xs={12}
                        sm={6}
                        md={6}>
                        <p>

                        </p>
                    </Grid>
                </Grid>
            </Box>
            <br></br>

            <Box display='flex' width='80vw'
                justifyContent='center' alignItems='center'  >

                <Box display='flex' maxWidth={500} alignItems={'center'} justifyContent={'center'}>
                    <Typography fontFamily={"Century"}
                        variant="h4" textAlign="center" >Únete a más de 500 personas en nuestra comunidad
                    </Typography>
                </Box>
            </Box>



            <br></br>
            <br></br>
            <br></br>

            <Box display='flex' width='80vw'
                justifyContent='center' alignItems='center'  >

                <Box display='flex' maxWidth={500} alignItems={'center'} justifyContent={'center'}>
                    <Typography fontFamily={"Century"}
                        variant="h4" textAlign="center" >¿Para Quién es el Club de Lectura y Cine 'Tecnología desde miradas feministas'?
                    </Typography>
                </Box>
            </Box>
            <br></br>
            <br></br>
            <Box backgroundColor="#ecf0f1" maxWidth="100%">
                <Box display='flex' width='80vw' alignItems={'center'} justifyContent={'center'}>
                    <Grid display='flex' width={400} container spacing={5} item xs={12} alignItems={'center'} justifyContent={'center'}>
                        <Grid item xs={12}
                            sm={6}
                            md={5}
                            fontFamily="Bookman Old Style"
                            justifyContent="center"
                        >
                            <p  >
                                <br></br>
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
                            </p>
                        </Grid>

                        <Grid item xs={12}
                            sm={6}
                            md={5}
                            fontFamily="Bookman Old Style"
                            justifyContent="center"
                        >
                            <p fontFamily="Bookman Old Style" justifyContent="center">
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
                            </p>
                        </Grid>

                    </Grid>
                </Box>
            </Box>


        </Container >
    )

}
