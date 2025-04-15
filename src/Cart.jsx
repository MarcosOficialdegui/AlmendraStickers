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

  // Calcular precio total con promociones
  const totalQuantity = groupedItems.reduce(
    (acc, sticker) => acc + sticker.quantity,
    0
  );

  const allPrices = groupedItems.flatMap((sticker) =>
    Array(sticker.quantity).fill(sticker.price)
  );

  let totalPrice = 0;
  let promoMessage = "";

  if (totalQuantity >= 10) {
    const sortedPrices = [...allPrices].sort((a, b) => a - b);
    const itemsToCharge = totalQuantity - 2;
    totalPrice = sortedPrices
      .slice(0, itemsToCharge)
      .reduce((acc, p) => acc + p, 0);
    promoMessage = "🎉 ¡Promo aplicada: 10 stickers al precio de 8!";
  } else if (totalQuantity >= 5) {
    const promoGroups = Math.floor(totalQuantity / 5);
    const sortedPrices = [...allPrices].sort((a, b) => b - a);
    const remainingPrices = sortedPrices.slice(promoGroups * 5);
    totalPrice =
      promoGroups * 2000 + remainingPrices.reduce((acc, p) => acc + p, 0);
    promoMessage = "🎉 ¡Promo aplicada: 5 stickers por $2000!";
  } else {
    totalPrice = allPrices.reduce((acc, p) => acc + p, 0);
  }

  // Copiar pedido
  const copyOrderToClipboard = () => {
    const orderText =
      groupedItems
        .map(
          (sticker) =>
            `📌 ${sticker.name} - Cantidad: ${sticker.quantity} - $${(
              sticker.price * sticker.quantity
            ).toFixed(2)}`
        )
        .join("\n") + `\n\n💰 TOTAL: $${totalPrice.toFixed(2)}`;

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
                    src={`${process.env.PUBLIC_URL}${sticker.image}`}
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

              {promoMessage && (
                <p className="promo-applied">{promoMessage}</p>
              )}

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
