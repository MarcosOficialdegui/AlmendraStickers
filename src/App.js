import { useState } from "react";
import StickerList from "./StickerList";
import Cart from "./Cart";
import Header from "./Header";
import "./App.css";


function App() {
  const [cartItems, setCartItems] = useState([]); // Estado del carrito

  // Función para agregar un sticker al carrito
  const addToCart = (sticker) => {
    setCartItems([...cartItems, sticker]);
  };

  const removeFromCart = (stickerName) => {
    setCartItems((prevCart) => {
      const updatedCart = [...prevCart];
      const index = updatedCart.findIndex((sticker) => sticker.name === stickerName);
  
      if (index !== -1) {
        if (updatedCart[index].quantity > 1) {
          updatedCart[index].quantity -= 1;
        } else {
          updatedCart.splice(index, 1);
        }
      }
  
      return updatedCart;
    });
  };

  return (
    <div className="app">
      <Header />
      <StickerList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;