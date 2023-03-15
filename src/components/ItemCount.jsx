
import { useState } from "react";
import {
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({id, nombre, stock, precio}) => {

  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () =>{
    setCount(count - 1);
  };

  return (
    <>
    <ButtonGroup size="sm" isAttached variant="outline" gap="1">
        {count <= 1 ? (
          <Tooltip label="Minimo Stock Permitido" placement="left">
            <IconButton color="white" bg="#7f918e" icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton color="white" bg="#7f918e" icon={<MinusIcon />} onClick={substractQty} />
        )}
        <Center>
          <Button
            variant="solid"
            color="white" bg="#7f918e"
            _hover={{
              bg: "white",
              color: "#7f918e",
              border:'2px'
            }}
          >
            Agregar al carrito {count}
          </Button>
        </Center>
        {count < stock ? (
          <IconButton color="white" bg="#7f918e" icon={<AddIcon />} onClick={addQty} />
        ) : (
          <Tooltip label="Maximo stock permitido" placement="right">
            <IconButton color="white" bg="#7f918e" icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
