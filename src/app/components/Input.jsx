'use client'
import { useState } from "react"
import React from "react"

export default function Input() {
    const [value, setValue] = useState('')

    if (setValue !=='') {
       // alert('cambio')
      <p>Hola</p>
    }
    

    return (
        <> 
       
            <input
                value={value}

                onChange={(e) => setValue(e.target.value)}

            />
           
        </>


    )


}





