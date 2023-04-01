import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { productosTotales } = useCartContext();
  return (
    <div className="carrito">
      <span className="material-symbols-outlined">shopping_cart</span>
      <span className="numeroCarrito"> {productosTotales() || ""}</span>
    </div>
  );
};

export default CartWidget;
