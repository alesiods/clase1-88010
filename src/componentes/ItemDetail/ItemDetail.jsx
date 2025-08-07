import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {

  return (

    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae ut officiis voluptate placeat. Placeat adipisci id, molestias nam eum eius! Dignissimos est autem deserunt ex molestias eos fugit quae?</p>


    </div>
  )
}

export default ItemDetail