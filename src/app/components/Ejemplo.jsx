'use client'
import { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('El contador se ha actualizado')
  }, [count])

  return (
    <>
      <p>Contador: {count}</p>
      <button >{count}</button>
      <button onClick={() => setCount(count+1)}>Aumentar</button>
    </>
  )
}