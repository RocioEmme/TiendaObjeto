import Data from "../data.json";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";


const ItemListContainer = () => {
  const [dataAMostrar, setDataAMostrar] = useState(undefined);
  const {categorias} = useParams();

  useEffect(() => {
    mostrarCategoria()
  }, [categorias])


  const mostrarCategoria = () => {
    if (categorias) {
      const categoriasFilt = Data.filter((producto)=> producto.categoria === categorias);
      setDataAMostrar(categoriasFilt) // mostrar productos filtrados por categoria
    } else {
      setDataAMostrar(Data) // mostrar todos los productos
    }
  }

  return(
    <div>
      <Center className="tituloSecuendario">
      { !categorias ? <h2>NUESTROS PRODUCTOS</h2> : <h2> {`${categorias}`}</h2> }
      </Center>

      <ItemList productos={dataAMostrar} />
    
    </div>
 
  );



};

export default ItemListContainer;