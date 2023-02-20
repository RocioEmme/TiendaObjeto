import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos a la tienda donde encontrarás los mejores productos de bazar"}/>
      </ChakraProvider>
    </>
  );
};

export default App;
