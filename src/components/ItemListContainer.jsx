import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categorias } = useParams();

  useEffect(() => {
    mostrarProductos();
  }, [categorias]);

  const mostrarProductos = async () => {

    /* trago toda la información de mi base de datos */
    const db = getFirestore();

    const itemsCollection = collection(db, "bazar");
    const snapshot = await getDocs(itemsCollection);
    const productosBazar = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    /* filtro por categorias */

    if (categorias) {
      const categoriasFilt = productosBazar.filter(
        (producto) => producto.categoria === categorias
      );
      setProductos(categoriasFilt);
    } else {
      setProductos(productosBazar);
    }
  };

  return (
    <div>
      <Center className="tituloSecuendario">
        {!categorias ? (
          <h2>NUESTROS PRODUCTOS</h2>
        ) : (
          <h2> {`${categorias}`}</h2>
        )}
      </Center>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
