import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
        <NavBar/>
         <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/productos" element={<ItemListContainer/>} />
          <Route exact path="/categorias/:categorias" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart/>} />
         </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};

export default App;
