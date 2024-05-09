'use client'
import { document } from "postcss";
import React from "react";
import { ReactDOM } from "react";
import { ReactElement } from "react";
import { ReactComponentElement } from "react";
import Ejemplos from "../components/Ejemplos.jsx"
import AccordionUsage from "../components/Acordion.jsx"
import SwipeableTextMobileStepper from '../components/Carousel.jsx'
import SimpleAccordion from '../components/AcordionDos.jsx'

import App from '../components/Slider.jsx'
import NavbarDos from "../components/navbar/NavarDos.jsx"
import { Stack, Box, AppBar, Toolbar, IconButton, ImageList, ImageListItem, Typography, Grid, Container, Button, Paper } from "@mui/material";
import Bluecard from "../components/Bluecard.jsx";
import TypografiaUno from "../components/TypografiaUno.jsx";
import TypografiaDos from "../components/TipografiaDos.jsx"
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import Carousel from '../components/CarouselGPT.jsx'
import AccordionTres from '../components/AcordionTres.jsx';
import AcordionTres from "../components/AcordionTres.jsx";
import ControlledAccordions from '../components/Acordion.jsx'
import { Block } from "@mui/icons-material";
import Bluecardos from "../components/AvartarCard.jsx"
import CardDos from "../components/CardDos.jsx"
import SimpleRating from "../components/Estrellas.jsx"
import CardUno from "../components/CardUno.jsx"
import CardTres from "../components/CardTres.jsx"
import BluecardUno from "../components/BluecardUno.jsx"
import BluecardDoos from "../components/BluecardDoos.jsx"
import BluecardTres from "../components/BluecardTres.jsx"
import { Headland_One } from "next/font/google";
import Acordion from "../components/Acordion.jsx";
import styled from "styled-components"
import InstagramIcon from '@mui/icons-material/Instagram';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import PiePagina from "../components/PiePagina.jsx"


export default function HeadPagina() {

    return (
       

                    <Typography boxSizing={"border-box"} fontFamily={'arial'} fontSize={17} textAlign="center">
                            <b>Cada mes, durante 5 meses,</b> recibirás recomendaciones de libros y
                            películas increíbles sobre <b>género, tecnología y feminismo,</b>
                            perfectos para aprender,
                            reflexionar y debatir en <b>nuestra comunidad exclusiva.</b>

                        
                        
                        
                    </Typography>
                   
              
     

    )

}