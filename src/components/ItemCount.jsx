import { useState } from "react";
import {
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ stock, onAdd, id, precio, imagen, nombre }) => {
  const [count, setCount] = useState(1);

  const sumarProductos = () => {
    setCount(count + 1);
  };

  const restarProductos = () => {
    setCount(count - 1);
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline" gap="1">
        {count <= 1 ? (
          <Tooltip label="Minimo Stock Permitido" placement="left">
            <IconButton
              color="white"
              bg="#7f918e"
              icon={<MinusIcon />}
              isDisabled
            />
          </Tooltip>
        ) : (
          <IconButton
            color="white"
            bg="#7f918e"
            icon={<MinusIcon />}
            onClick={restarProductos}
          />
        )}
        <Center>
          <Button
            disabled={stock <= 0}
            onClick={() => onAdd(id, count, precio, imagen, nombre)}
            variant="solid"
            color="white"
            bg="#7f918e"
            fontSize="md"
            _hover={{
              bg: "white",
              color: "#7f918e",
              border: "2px",
            }}
          >
            Agregar al carrito: {count}
          </Button>
        </Center>
        {count < stock ? (
          <IconButton
            color="white"
            bg="#7f918e"
            icon={<AddIcon />}
            onClick={sumarProductos}
          />
        ) : (
          <Tooltip label="Maximo stock permitido" placement="right">
            <IconButton
              color="white"
              bg="#7f918e"
              icon={<AddIcon />}
              isDisabled
            />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
