
"use client"

import React, { Children } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Image from "next/image";
import { Box } from "@mui/material";
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';



 



let Targeta =  function Targeta() { 


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
              
        </CardContent>
  
      </Card>
  )
}


let TargetaDos = function TargetaDos() { 


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
          
    </CardContent>

  </Card>
  )
}

let libros=[{

  imagen:Targeta,
  texto:"Hola1"
},
{
  
  imagen:TargetaDos,
  texto:"Hola2"
},

]


function Variable() {
  {Children}
  const settings = {

      className: "center",
      className: "slider variable-width",
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",

      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]

  };
  return (
      <Box className="slider-container" boxSizing={"border-box"} display='flex'  alignItems={'center'} justifyContent={'center'}>
          <Box boxSizing={"border-box"} display='flex'  alignItems={'center'} justifyContent={'center'}>
          
                  <Slider {...settings} style={{ width: 590 }}   >

                      {

libros.map(item=>(
              
             
  <Card  key={item.texto} >{item.imagen}{item.texto}</Card>
))

                      }

                  </Slider>
          </Box>
      </Box>
         
   
  );
}

export default Variable;



