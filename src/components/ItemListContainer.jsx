import Data from "../data.json";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";


const ItemListContainer = () => {

const {categorias} = useParams();

  const categoriasFilt = Data.filter((producto)=> producto.categoria === categorias);
  console.log(categoriasFilt);

  return(
    <div>
      <Center className="tituloSecuendario">
      { !categorias ? <h2>NUESTROS PRODUCTOS</h2> : <h2> {`${categorias}`}</h2> }
      </Center>

      {categorias? <ItemList productos={categoriasFilt} /> : <ItemList productos={Data} /> }
    
    </div>
 
  );



};

export default ItemListContainer;