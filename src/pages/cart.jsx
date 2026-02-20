import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.title}</span>
          <span>${item.price}</span>
        </div>
      ))}

      <h2>Total: ${total}</h2>
    </div>
  );
}

export default Cart;