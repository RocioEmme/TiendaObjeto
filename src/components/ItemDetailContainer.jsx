import Data from "../data.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  return (
    <>
      <ItemDetail data={Data}/>
    </>
  )
}

export default ItemDetailContainer;