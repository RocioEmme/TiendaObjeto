import { Image, Box, Center } from "@chakra-ui/react";
import fotoPortada from "../assets/cozyhome.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <Center>
        <Box boxSize="xxl">
          <Image src={fotoPortada} alt="foto de portada" />
        </Box>
      </Center>

    </div>
  );
};

export default Welcome;
