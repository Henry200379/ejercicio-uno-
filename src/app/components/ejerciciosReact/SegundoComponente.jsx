
import React from 'react'
import stylo from '../ejerciciosReact/PrimerComponente.module.css'
import PropTypes from 'prop-types'


const SegundoComponente = ({ titulo, subtitulo, numero }) => {
  return (
    <>
      <h1 >Variables como se muestran</h1>

      <h4 className={stylo.h4}>{titulo}</h4><p></p>
      <h4>{subtitulo='hola' }</h4><p></p>
      <h4>{numero + 1}</h4><p></p>


    </>
  )
}

export default SegundoComponente



/*PropTypes.SegundoComponente={
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  numero:PropTypes.number.isRequired,
}

*/
