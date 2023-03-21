import { Card, Center, CardBody, CardFooter, Stack, Divider, Button, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, categoria, imagen, stock }) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card height="400px" width="400px "alignItems="center" justifyContent="center">
            <CardBody>
              <Flex alignItems="center" justifyContent="center">
              <Image boxSize='150px' src={imagen}/>
              </Flex>
              <Stack mt="6" alignItems="center" justifyContent="center">
                <Heading size="lg" color="#7f918e">{nombre}</Heading>
                <Text color="#62636a">
                  Categoría: {categoria}
                </Text>
                <Text color="#62636a" fontSize="md">
                   Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Center>
                <Button variant='solid' color="white" bg="#7f918e" border='2px'
                 _hover={{
                  bg: "white",
                  color: "#7f918e",
                }}>
                  <Link to={`/item/${id}`}>Detalles</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;
