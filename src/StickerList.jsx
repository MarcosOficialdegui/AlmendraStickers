import { useState } from 'react';
import "./StickerList.css";

const stickers = [
  { id: 1, name: "Sol Argentina", price: 500, image: "/images/solarg.png", available:true},
  { id: 2, name: "Un verano sin ti", price: 500, image: "/images/badbunny.png", available:false },
  { id: 3, name: "Daddy", price: 500, image: "/images/daddy.png", available:true },
  { id: 4, name: "Estampita Diego", price: 500, image: "/images/diego.png", available:true },
  { id: 5, name: "Diego", price: 500, image: "/images/diego2.png", available:true },
  { id: 6, name: "Fight Club", price: 500, image: "/images/fightclub.png", available:true },
  { id: 7, name: "Classic Garage", price: 500, image: "/images/garage.png", available:false },
  { id: 8, name: "Just A Girl", price: 450, image: "/images/girl.png", available:true },
  { id: 9, name: "The World Is Yours", price: 450, image: "/images/globo.png", available:true },
  { id: 10, name: "El Grito", price: 500, image: "/images/grito.png", available:true },
  { id: 11, name: "Carta Lovers", price: 500, image: "/images/lovers.png", available:true },
  { id: 12, name: "Luna Tarot", price: 500, image: "/images/luna.png", available:true },
  { id: 13, name: "Mariposa", price: 500, image: "/images/mariposa.png", available:true },
  { id: 14, name: "MTV", price: 500, image: "/images/mtv.png", available:true },
  { id: 15, name: "Ola de Kanawa", price: 500, image: "/images/ola.png", available:true },
  { id: 16, name: "Estampita Paisaje", price: 450, image: "/images/pasiaje1.png", available:true },
  { id: 17, name: "Queen Cartas", price: 500, image: "/images/queen.png", available:true },
  { id: 18, name: "Reader Carta", price: 450, image: "/images/reader.png", available:true },
  { id: 19, name: "Pickle Rick", price: 500, image: "/images/rick.png", available:true },
  { id: 20, name: "Sol Tarot", price: 500, image: "/images/sol.png", available:true },
  { id: 21, name: "Treat People With Kindness", price: 500, image: "/images/tpwk.png", available:true },
  { id: 22, name: "Spinetta Artaud", price: 500, image: "/images/artaud.png", available:true },
  { id: 23, name: "Dino", price: 500, image: "/images/dino.png", available:true },
  { id: 24, name: "Estampita Di María (5x8cm)", price: 550, image: "/images/estampita_dimaria.png", available:true },
  { id: 25, name: "Estampita Messi (5x8cm)", price: 550, image: "/images/estampita_messi.png", available:true },
  { id: 26, name: "Estampita Julián (5x8cm)", price: 550, image: "/images/julian.png", available:true },
  { id: 27, name: "Estampita Dibu (5x8cm)", price: 550, image: "/images/estampitadibu.png", available:true },
  { id: 28, name: "Fantasmita", price: 500, image: "/images/fantasmita.png", available:true },
  { id: 29, name: "Flash", price: 500, image: "/images/flash.png", available:true },
  { id: 30, name: "Garfield", price: 500, image: "/images/garfield.png", available:true },
  { id: 31, name: "Good Days", price: 500, image: "/images/gooddays.png", available:true },
  { id: 32, name: "Study!", price: 500, image: "/images/study.png", available:true },
  { id: 33, name: "Alien", price: 500, image: "/images/alien.png", available:true },
  { id: 34, name: "Winnie Pooh", price: 500, image: "/images/winniep.png", available:true },
  { id: 35, name: "Ángel Caído", price: 500, image: "/images/angelcaido.png", available:true },
  { id: 36, name: "Ruta 40", price: 550, image: "/images/arg.png", available:true },
  { id: 37, name: "Arpa", price: 500, image: "/images/arpa.png", available:true },
  { id: 38, name: "Chromakopia", price: 450, image: "/images/chromakopia.png", available:true },
  { id: 39, name: "Corazón", price: 500, image: "/images/corazon.png", available:true },
  { id: 40, name: "Deftones", price: 450, image: "/images/deftones.png", available:true },
  { id: 41, name: "Encendedor", price: 500, image: "/images/encendedor.png", available:true },
  { id: 42, name: "Esqueleto en llamas", price: 500, image: "/images/esqueleto.png", available:true },
  { id: 43, name: "Flores rosas", price: 500, image: "/images/floores.png", available:false },
  { id: 44, name: "Ramo flores", price: 500, image: "/images/floress.png", available:true },
  { id: 45, name: "Zapatilla", price: 500, image: "/images/llanta.png", available:true },
  { id: 46, name: "Vans", price: 500, image: "/images/vans.png", available:true },
  { id: 47, name: "Tyler ID", price: 500, image: "/images/tylerid.png", available:false},
  { id: 48, name: "Ojo Turco", price: 500, image: "/images/ojoturco.png", available:true },
  { id: 49, name: "Arcoiris", price: 500, image: "/images/arcoiris.png", available:true},
  { id: 50, name: "Luna", price: 500, image: "/images/moon.png", available:true },
  { id: 51, name: "Margarita", price: 500, image: "/images/margarita.png", available:false },
  { id: 52, name: "Snoopy", price: 500, image: "/images/snoopy.png", available:true },
  { id: 53, name: "Here comes the sun", price: 500, image: "/images/sun.png", available:true },
];

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