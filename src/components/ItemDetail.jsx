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
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = ({ data }) => {

    const { id } = useParams();

    const df = data.filter((prod) => prod.id == id);

  return (
    <>
      {df.map((prod) => (
        <div key={prod.id}>
            <Center p="1rem">
                <Card height="400px" width="400px" alignItems="center" justifyContent="center" >
                <CardBody> 
                  <Flex alignItems="center" justifyContent="center">
                  <Image boxSize="150px"  src={prod.imagen}/>
                  </Flex>
                    <Stack mt="6" alignItems="center" justifyContent="center">
                    <Heading size="md" color="#7f918e">{prod.nombre}</Heading>
                    <Text color="#62636a" fontSize="md">{prod.descripcion}</Text>
                    <Text color="#62636a" fontSize="md">
                        {prod.precio}
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Center>
                        <ItemCount
                        id={prod.id}
                        nombre={prod.nombre}
                        precio={prod.precio}
                        stock={prod.stock}
                        />
                    </Center>
                </CardFooter>
                </Card>
            </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;


