import React from "react";
import { Typography, Box } from "@mui/material";


export default function TypografiaDos() {

    return (

        <Typography fontSize={14} fontFamily={'arial'} component="div" alignContent={'center'} justifyContent={'center'} maxWidth={400} maxHeight={50}
         textAlign={'center'}  sx={{ paddingBlockEnd:12, paddingInline:5,  marginLeft:2 }}>

            <p textAlign='center'>
                <strong>Cada mes, durante 5 meses,</strong> recibirás recomendaciones de libros y
                películas increíbles sobre <strong>género, tecnología y feminismo,</strong> 
                perfectos para aprender,
                reflexionar y debatir en <strong>nuestra comunidad exclusiva.</strong>
            </p>
        </Typography>



    )
}