import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import FormCart from "./FormCart";

const Cart = () => {
  const { cart, precioFinal, eliminarProducto } = useCartContext();

  return (
    <div>
      {cart && cart.length === 0 ? (
        <div className="carritoVacio">
          <p>No hay productos en el carrito</p>
          <Link to="/productos">
            <Button> Ver productos </Button>
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((productoEnCarrito) => (
            <Center key={productoEnCarrito.id} producto={productoEnCarrito}>
              <Card
                maxW="sm"
                height="300px"
                width="350px"
                alignItems="center"
                justifyContent="center"
                marginBlock="15px"
              >
                <CardBody>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Image
                      boxSize="150px"
                      src={productoEnCarrito.imagen}
                      borderRadius="lg"
                    />
                    <Heading mt="2" size="md" color="#7f918e" fontSize="2xl">
                      {productoEnCarrito.nombre}
                    </Heading>
                  </Flex>
                  <Stack mt="2" mb="2" direction="row" justifyContent="center">
                    <Text fontSize="lg" color="#7f918e" as="b">
                      {" "}
                      Cantidad: {productoEnCarrito.cantidad}
                    </Text>
                    <Text color="#7f918e" fontSize="lg" as="b">
                      ${productoEnCarrito.cantidad * productoEnCarrito.precio}
                    </Text>
                  </Stack>
                  <Flex alignItems="center" justifyContent="center">
                    <Button
                      onClick={() => eliminarProducto(productoEnCarrito.id)}
                      variant="solid"
                      color="white"
                      bg="#7f918e"
                      border="2px"
                      fontSize="lg"
                      _hover={{
                        bg: "white",
                        color: "#7f918e",
                      }}
                    >
                      {" "}
                      Eliminar producto
                    </Button>
                  </Flex>
                </CardBody>
              </Card>
            </Center>
          ))}
          <div>
            <Flex alignItems="center" justifyContent="center">
              <Text fontSize="2xl" color="#7f918e" as="b">
                Total a pagar:$ {precioFinal()}
              </Text>{" "}
            </Flex>
          </div>
          <FormCart />
        </div>
      )}
    </div>
  );
};

export default Cart;
