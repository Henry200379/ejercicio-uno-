import { render } from "react-dom";
import React from "react";
import PrimerComponente from "../components/ejerciciosReact/PrimerComponente"
import SegundoComponente from "../components/ejerciciosReact/SegundoComponente"

function apppp () {
    return ( 
        <>
        
        <PrimerComponente/>
        <SegundoComponente titulo='esto es un subtitulo'  subtitulo='ee'  numero={1}/>
        </>
        );
}

export default apppp ;