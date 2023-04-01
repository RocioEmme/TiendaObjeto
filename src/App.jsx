import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import CartProvider from "./context/CartContext";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <CartProvider>
          <NavBar />
            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route exact path="/productos" element={<ItemListContainer />} />
              <Route
                exact
                path="/categorias/:categorias"
                element={<ItemListContainer />}
              />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};

export default App;
