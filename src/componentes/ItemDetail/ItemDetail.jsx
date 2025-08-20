import React, { useState } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({id, nombre, precio, img, stock}) => {
//creamos un estado local con la cantidad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0)


  const {agregarAlCarrito} = useContext(CarritoContext)






  //creamos una funcion manejadora de la cantidad

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad)

    //Ahora aca yo puedo crear un objeto con el item y la cantidad
    const item = {id,nombre, precio}
    agregarAlCarrito(item, cantidad)
  }

  return (

    <div className='contenedorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae ut officiis voluptate placeat. Placeat adipisci id, molestias nam eum eius! Dignissimos est autem deserunt ex molestias eos fugit quae?</p>
        {
          //Aca empleamos la logica de montaje y desmotaje del contador

          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }


    </div>
  )
}

export default ItemDetail