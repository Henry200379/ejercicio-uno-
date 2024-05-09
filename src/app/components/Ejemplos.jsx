
'use client'
import React from "react"

export default function Ejemplos() {
    const products = [
        { title: 'Col', isFruit: false, id: 1 },
        { title: 'Ajo', isFruit: false, id: 2 },
        { title: 'Manzana', isFruit: true, id: 3 },
      ];

      const listItems = products.map(product =>
        <li
          key={product.id}
          style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
          }}
        >
          {product.title}
        </li>
      );
    return (

        <>
            <h1>Pruebas</h1>
            <button>
                Soy un botón
            </button>

            
            <ul>{listItems}</ul>
            

        </>

    )






}