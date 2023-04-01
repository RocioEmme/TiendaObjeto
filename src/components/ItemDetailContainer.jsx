import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const unItem = doc(db, "bazar", `${id}`);
    getDoc(unItem).then((snapshot) => {
      const docs = snapshot.data();
      setProducto(docs);
    });
  }, []);

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
