import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useCartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const FormCart = () => {
  const [orderId, setOrderId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const db = getFirestore();
  const { cart, precioFinal } = useCartContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email1 !== email2) {
      setErrorMessage("Los correos electrónicos no coinciden");
    } else {
      addDoc(orderCollection, order).then(({ id }) => {
        setOrderId(id);
        Swal.fire({
          title: "Muchas gracias por tu compra",
          text: `Su número orden es  "${id}". Le enviaremos un email con el detalle de la compra.`,
          color: "#7f918e",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  };

  const orderCollection = collection(db, "orden");

  const order = {
    nombre,
    apellido,
    email1,
    email2,
    items: cart.map((producto) => ({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: producto.cantidad,
    })),
    total: precioFinal(),
  };

  return (
    /* formulario para finalizar compra */
    <div className="formularioCart">
      <form onSubmit={handleSubmit}>
        <Container>
          <FormControl isRequired mt="20px">
            <FormLabel fontSize="2xl" color="#7f918e" as="b">
              Nombre:
            </FormLabel>
            <Input
              focusBorderColor="#7f918e"
              placeholder="Ingrese su nombre"
              onChange={(e) => setNombre(e.target.value)}
            />
            <FormLabel fontSize="2xl" color="#7f918e" as="b" mt="3">
              Apellido:
            </FormLabel>
            <Input
              focusBorderColor="#7f918e"
              placeholder="Ingrese su apellido"
              onChange={(e) => setApellido(e.target.value)}
            />
            <FormLabel fontSize="2xl" color="#7f918e" as="b" mt="3">
              Email:
            </FormLabel>
            <Input
              focusBorderColor="#7f918e"
              placeholder="Ingrese su correo electrónico"
              onChange={(e) => setEmail1(e.target.value)}
            />
            <FormLabel fontSize="2xl" color="#7f918e" as="b" mt="3">
              Confirmar Email:
            </FormLabel>
            <Input
              focusBorderColor="#7f918e"
              placeholder="Ingrese su correo electrónico"
              onChange={(e) => setEmail2(e.target.value)}
            />
            {errorMessage && <div>{errorMessage}</div>}
            <Button
              id="confirm"
              type="submit"
              left="35%"
              color="white"
              bg="#7f918e"
              mt="6"
              fontSize="lg"
              _hover={{
                bg: "white",
                color: "#7f918e",
                border: "2px",
              }}
            >
              Confirmar compra
            </Button>
          </FormControl>
        </Container>
      </form>
      <Flex mt="3" alignItems="center" justifyContent="center">
        <Text fontSize="2xl" color="#7f918e" as="b">
          <p>Su número de orden es: {orderId}</p>
        </Text>
      </Flex>
    </div>
  );
};

export default FormCart;
