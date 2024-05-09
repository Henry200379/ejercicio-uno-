import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "@/app/styles/Carrousell.module.css"
import Image from "next/image";
import { Box } from "@mui/material";
import CardDos from "./CardDos"



const libros = [
    {
        text: "Libro1",
        autor: "Autor1",
        imagen: "/c1.webp"

    },
    , {
        text: "Libro1",
        autor: "Autor1",
        imagen: "/c2.webp"

    },
    , {
        text: "Libro1",
        autor: "Autor1",
        imagen: "/c3.webp"

    },
    , {
        text: "Libro1",
        autor: "Autor1",
        imagen: "/c4.webp"

    },
    {
        text: "Libro1",
        autor: "Autor1",
        imagen: "/c5.webp"

    },

    {
        text: "Libro1",
        autor: "Autor1",
        imagen: "/c6.webp"

    },




]


function AutoPlay() {
    const settings = {

        className: "center",
        className: "slider variable-width",
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
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

                            libros.map((libro, index) => {
                                return (
                                    <div key={index} >

                                        <div  >

                                            <Image src={`${libro.imagen}`} alt="imagen" width="190" height="200" />

                                        </div>

                                    </div>
                                )

                            }




                            )



                        }

                    </Slider>
            </Box>
        </Box>
           
     
    );
}

export default AutoPlay;