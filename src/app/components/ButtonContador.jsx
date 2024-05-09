'use client'
import React from "react";
import { useState } from "react";

export default function ButtonContador  ({value}) {
    const [contador, setContador] = useState(value=0)

    const handleContador = () => {
        setContador(contador + 1)

    }


    return (

        <>
            <h5>Contador</h5>
            <p>{contador}</p>
            <button onClick={handleContador}>Soy un boton</button>


        </>


    )




}