import { useState, useEffect } from "react";
import StickerList from "./StickerList";
import Cart from "./Cart";
import Header from "./Header";
import "./App.css";

function App() {

  const [showBanner, setShowBanner] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShowBanner(false); // Oculta al bajar
      } else {
        setShowBanner(true); // Muestra al subir
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const [cartItems, setCartItems] = useState([]);

  // Función para agregar al carrito (con verificación de disponibilidad)
  const addToCart = (sticker) => {
    if (!sticker.available) {
      alert(`⚠️ ${sticker.name} no está disponible actualmente`);
      return;
    }
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
      {showBanner && (
        <div className="promo-banner">
          🎁 Promo: <strong>¡Cada 5 stickers que compras, 1 va de regalo🎉!</strong>
        </div>
      )}
      <StickerList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;