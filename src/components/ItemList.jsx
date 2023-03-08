import Item from "./Item";
import { Flex } from "@chakra-ui/react";

const ItemList = ({productos}) => {
  console.log(productos);
  return (
    <div>
    
        <Flex alignItems='center' justifyContent="center" flexWrap="wrap">
        {productos.map((producto) => (
          <Item
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          stock={producto.stock}
          categoria={producto.categoria}
          imagen={producto.imagen}
          />
          ))}
          
        </Flex>
    </div>
  );
};

export default ItemList;
