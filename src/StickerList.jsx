import { useState } from 'react';
import "./StickerList.css";
import stickers from "./Stickers.js";

function StickerList({ addToCart }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image, isAvailable) => {
    if (window.innerWidth > 768 && isAvailable) {
      setSelectedImage(`${process.env.PUBLIC_URL}${image}`);
    }
  };

  return (
    <>
      <div className="sticker-container">
        {stickers.map((sticker) => {
          const isAvailable = sticker.available;
          
          return (
            <div 
              key={sticker.id} 
              className={`sticker-card ${!isAvailable ? 'out-of-stock' : ''}`}
            >
              <img 
                src={`${process.env.PUBLIC_URL}${sticker.image}`}
                alt={sticker.name}
                onClick={() => handleImageClick(sticker.image, isAvailable)}
                className="sticker-image"
              />
              <p>{sticker.name} - ${sticker.price}</p>

              {!isAvailable ? (
                <div className="stock-badge">AGOTADO</div>
              ) : (
                <button
                  className="sticker-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(sticker);
                  }}
                >
                  Agregar
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Espacio para el carrito en móviles */}
      <div className="mobile-bottom-spacer"></div>

      {/* Modal para imagen ampliada (PC) */}
      {selectedImage && (
        <div 
          className="image-modal" 
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Vista ampliada" 
            className="enlarged-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default StickerList;