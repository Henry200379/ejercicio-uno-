import React from "react";
import Slider from "react-slick";
import styles from "@/app/styles/Carrousell.module.css"
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-elastic-carousel'

const libros = [
    
    {
        
        imagen: "/c1.webp"

    }, {
       
        imagen: "/c2.webp"

    }, {
        
        imagen: "/c3.webp"

    }, 
    , {
       
        imagen: "/c4.webp"

    }, 
  
    
    
    

]
const settings = {
   dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
    
    initialSlide: 0,
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
          initialSlide: 2,
          resizeTo:600
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          resizeTo:480
          

        }
      }
    ]


}


export default function Carrouselll() {
    
    return (
        <>
         
            <div >
                
            <h3>Libros</h3>
            <br></br>
                <Slider {...settings}  >
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

                </Slider>
            </div>

         
        </>
    )
}