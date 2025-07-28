import Boton from "./componentes/Boton/Boton"
import './App.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal";
import ItemCount from "./componentes/ItemCount/ItemCount";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";


const App = () => {

  function saludo(){
    console.log("hola")
  }

  saludo()

  let cantidad = 30
  let colorFondo = {backgroundColor: "green"}

  const celular= {
    marca: "Samsung",
    precio: 850000
  }


  return (

    <>
      {/* <h1 style={colorFondo}>Hola chicos, bienvenidos, en la clase de hoy somos {cantidad}</h1>
      <h2 style={{color:"blue"}}> Letra color azul</h2>
      <h3 className="colorFondoPrincipal">subtitulo</h3> 

      <TituloPrincipal saludo="Hola Comision" producto={celular}/>
      <Boton texto="Comprar"/>
      <Boton texto="Eliminar"/>

      <ItemCount stock={15}/>
      <hr />
      <ItemCount stock={10}/>
      <hr />
      <ItemCount stock={5}/>
      */}

      <NavBar/>
      <ItemListContainer/>


    </>
  )
}

export default App
