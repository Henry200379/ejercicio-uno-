import React from "react";
import { Typography, Box, Button } from "@mui/material";


export default function TypografiaUno() {

    return (
        <>
        <Typography fontFamily={'arial'} fontSize={17} component="div"
         alignContent={'center'} justifyContent={'center'} 
        maxWidth={500} maxHeight={400} textAlign={'center'} 
         sx={{paddingBlockEnd:12, paddingInline:5, marginLeft:2 }}>
            El club de lectura y cine para personas que desean descubrir,
            aprender e imaginar un mundo diferente.
        </Typography>
          
        </>

      

    )
}
