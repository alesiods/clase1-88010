
import './App.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";


const App = () => {


  return (

    <>
      
      <NavBar/>
      <ItemListContainer greeting="holaaa"/>


    </>
  )
}

export default App
