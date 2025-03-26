import { useState } from "react";
import "./Cart.css";

function Cart({ cartItems = [], removeFromCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  // Agrupar items por sticker
  const groupedItems = cartItems.reduce((acc, sticker) => {
    const existingItem = acc.find((item) => item.name === sticker.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...sticker, quantity: 1 });
    }
    return acc;
  }, []);

  // Calcular precio total
  const totalPrice = groupedItems.reduce(
    (acc, sticker) => acc + sticker.price * sticker.quantity,
    0
  );

  // Función para copiar el pedido
  const copyOrderToClipboard = () => {
    const orderText = groupedItems
      .map(
        (sticker) => 
          `📌 ${sticker.name} - Cantidad: ${sticker.quantity} - $${(sticker.price * sticker.quantity).toFixed(2)}`
      )
      .join("\n") +
      `\n\n💰 TOTAL: $${totalPrice.toFixed(2)}`;

    navigator.clipboard
      .writeText(orderText)
      .then(() => {
        setCopyStatus("¡Pedido copiado! 📋");
        setTimeout(() => setCopyStatus(""), 2000);
      })
      .catch(() => {
        setCopyStatus("Error al copiar");
        setTimeout(() => setCopyStatus(""), 2000);
      });
  };

  return (
    <div className={`cart ${isOpen ? "open" : "collapsed"}`}>
      <button className="toggle-cart" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Ocultar Pedido" : "Ver mi pedido"}
      </button>

      {isOpen && (
        <div className="cart-content">
          <h2 className="cart-title">Tu Pedido</h2>
          {groupedItems.length === 0 ? (
            <p>No hay stickers en tu pedido.</p>
          ) : (
            <div>
              {groupedItems.map((sticker, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={sticker.image}
                    alt={sticker.name}
                    className="cart-image"
                  />
                  <div className="cart-info">
                    <span>{sticker.name}</span>
                    <span className="cart-price">
                      {sticker.quantity >= 2 && (
                        <span className="quantity">{sticker.quantity} x </span>
                      )}
                      ${(sticker.price * sticker.quantity).toFixed(2)}
                    </span>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(sticker.name)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <strong>Total:</strong> ${totalPrice.toFixed(2)}
              </div>
              <button
                className="copy-order-btn"
                onClick={copyOrderToClipboard}
                disabled={groupedItems.length === 0}
              >
                📋 Copiar Pedido
              </button>
              {copyStatus && <div className="copy-status">{copyStatus}</div>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;