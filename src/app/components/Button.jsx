'use client'
import React from "react"

export default function  RedAlert (){
 const handleClick=()=>{

    alert('Hola')
 }

return(

    <button onClick={handleClick}>

       Mi Boton ok
    </button>
)
}