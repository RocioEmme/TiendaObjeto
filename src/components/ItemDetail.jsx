import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Center,
  Flex,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ producto }) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const { agregarProducto } = useCartContext();
  const { id } = useParams();

  const onAdd = (id, cantidad, precio, imagen, nombre) => {
    agregarProducto(id, cantidad, precio, imagen, nombre);
    setIrAlCarrito(true);
  };

  return (
    <>
      {producto && (
        <div key={id}>
          <Center p="1rem">
            <Card
              height="400px"
              width="400px"
              alignItems="center"
              justifyContent="center"
            >
              <CardBody>
                <Flex alignItems="center" justifyContent="center">
                  <Image boxSize="150px" src={producto.imagen} />
                </Flex>
                <Stack mt="6" alignItems="center" justifyContent="center">
                  <Heading size="md" color="#7f918e">
                    {producto.nombre}
                  </Heading>
                  <Text color="#62636a" fontSize="md">
                    {producto.descripcion}
                  </Text>
                  <Text color="#62636a" fontSize="md">
                    ${producto.precio}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Center>
                  {irAlCarrito ? (
                    <Link className="toCart" to="/cart">
                      Terminar compra
                    </Link>
                  ) : (
                    <ItemCount
                      id={id}
                      nombre={producto.nombre}
                      precio={producto.precio}
                      stock={producto.stock}
                      imagen={producto.imagen}
                      onAdd={onAdd}
                    />
                  )}
                </Center>
              </CardFooter>
            </Card>
          </Center>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
