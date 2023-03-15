import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../data.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    filtrarProducto()
  }, [id])

  const filtrarProducto = () => {
    const prod = Data.find((prod) => prod.id == id); // producto
    setProd(prod)
  }

  return (
    <>
      <ItemDetail prod={prod}/>
    </>
  )
}

export default ItemDetailContainer;