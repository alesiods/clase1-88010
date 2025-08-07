
import './App.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


const App = () => {


  return (

    <>
      
      <NavBar/>
      <ItemListContainer greeting="holaaa"/>
      <ItemDetailContainer/>


    </>
  )
}

export default App
