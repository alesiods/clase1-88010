import React from 'react'

const TituloPrincipal = ({saludo, producto}) => {

 /* const {saludo} = props

 const persona = {
  nombre: "pepe",
  edad: 30
 }

 const {edad} = persona
 console.log(edad) */

 console.log(producto)

  return (
    <h1>{saludo}</h1>
  )
}

export default TituloPrincipal