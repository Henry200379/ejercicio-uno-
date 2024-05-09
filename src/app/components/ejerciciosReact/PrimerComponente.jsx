
import React from 'react'
import stylo from '../ejerciciosReact/PrimerComponente.module.css'

const texto='Hola es un texto'
const numeros = 1234
const arrayss=[1234, 'hola']
const booleano=true
const funcion=()=>1+1
const objetos={nombre: 'henry ' , edad: 45}
const fecha=new Date()


const PrimerComponente = () => {
  return (
    <>
    <h1 >Variables como se muestran</h1>
    <h4 className={stylo.h4}>Variable de:</h4><p>{texto}</p>
    <h4>Variable de:</h4><p>{numeros}</p>
    <h4>Variable de:</h4><p>{arrayss}</p>
    <h4>Variable de:</h4><p>{booleano}</p>
    <h4>Variable de: </h4><p>{funcion()}</p>
    <h4>Variable de:</h4><p>{JSON.stringify(objetos)}</p>
    <h4>Variable de:</h4><p>{JSON.stringify(fecha)}</p>
   
    </>
  )
}

export default PrimerComponente







