import { Typography } from "@mui/material"
import Image from "next/image"
import ImageList from "@mui/material"
import Box from "@mui/material"
import styles from "@/app/styles/Carrousell.module.css"
import Slider from "react-slick"
import { Settings } from "@mui/icons-material"
import "slick-carousel/slick/slick.css"
import { ReactDOM } from "react"


import "slick-carousel/slick/slick-theme.css";

import "react-slick"
import Grid from "@mui/material"

import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';





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






export default function Carrousell() {
  const carouselRef = React.useRef(null);
  
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(universities.length);
    }

  };
  
   




  let resetTimeout;


  return (
    <div className={styles.Carrousell} >
      <Carousel transitionMs={1500} itemsToShow={3} showArrows={false} showEmptySlots="false"   enableAutoPlay="true" autoPlaySpeed={150} 

       breakPoints={[
        [{width: 1200, itemsToShow: 3, itemsToScroll: 3 }],
        [{width: 900, itemsToShow: 2, itemsToScroll: 2 }],
        [{width: 600, itemsToShow: 1, itemsToScroll: 1 }]

       ]}
       
      
        
        className='carousel-university'
        ref={carouselRef}
        onPrevStart={onPrevStart}
        
        disableArrowsOnEnd={false}


        isRTL={false}
        onNextEnd={({ index }) => {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
                carouselRef?.current?.goTo(0);
            }, 4000); // same time
        }}
        >
        
      


      
        {

          libros.map((libro, index) => {
            return (
              <div key={index}  >

                <div className={styles.Carrousell}>
                
                  <Image src={`${libro.imagen}`} alt="imagen" width="190" height="200" />
                 
                </div>

              </div>
            )

          }




          )



        }
      </Carousel>
    </div>
  )
}
