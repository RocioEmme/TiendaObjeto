import { useToast } from "@chakra-ui/react";
import { useState, useContext } from "react";
import React from "react";

/* Creo el contexto y realizo una función para utilizarlo */
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const toast = useToast();

  /* función para agregar productos al carrtio */
  const agregarProducto = (item, cantidad, precio, imagen, nombre) => {
    let newCart;
    let producto = cart.find((producto) => producto.id === item.id);
    if (producto) {
      producto.cantidad += cantidad;
      producto.precio += precio;
      newCart = [...cart];
      toast({
        title: "Producto agregado al carrito",
        position: "top-right",
        status: "success",
        bg: "#7f918e",
        duration: 2000,
        isClosable: true,
        Button: true,
      });
    } else {
      producto = {
        id: item,
        nombre: nombre,
        cantidad: cantidad,
        precio: precio,
        imagen: imagen,
      };
      newCart = [...cart, producto];
    }
    setCart(newCart);
    toast({
      title: "Producto agregado al carrito",
      position: "top-right",
      status: "success",
      bg: "#7f918e",
      duration: 2000,
      isClosable: true,
      Button: true,
    });
  };

  const precioFinal = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
  };

  const productosTotales = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.cantidad,
      0
    );

  const limpiarCarrito = () => setCart([]);

  const buscarProducto = (id) =>
    cart.find((prod) => prod.id === id) ? true : false;

  const eliminarProducto = (id) =>
    setCart(cart.filter((prod) => prod.id !== id));

  return (
    <div>
      <CartContext.Provider
        value={{
          limpiarCarrito,
          buscarProducto,
          eliminarProducto,
          agregarProducto,
          precioFinal,
          productosTotales,
          cart,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
