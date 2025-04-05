import { useState } from 'react';
import "./StickerList.css";

const stickers = [
  { id: 1, name: "Un verano sin ti", price: 500, image: "/images/badbunny.png", available:true },
  { id: 2, name: "DtMF - BadBunny", price: 500, image: "/images/dtmf.png", available:true },
  { id: 80, name: "Sol Argentina", price: 500, image: "/images/solarg.png", available:true},
  { id: 104, name: "Universidad Pública", price: 500, image: "/images/universidad.jpg", available:true },
  { id: 81, name: "Mate", price: 500, image: "/images/mate.png", available:true },
  { id: 82, name: "Ruta 40", price: 550, image: "/images/arg.png", available:true },
  { id: 3, name: "Daddy", price: 500, image: "/images/daddy.png", available:true },
  { id: 4, name: "Fight Club", price: 500, image: "/images/fightclub.png", available:true },
  { id: 5, name: "The World Is Yours", price: 450, image: "/images/globo.png", available:true },
  { id: 6, name: "Pickle Rick", price: 500, image: "/images/rick.png", available:true },
  { id: 7, name: "Classic Garage", price: 500, image: "/images/garage.png", available:true },
  { id: 8, name: "Just A Girl", price: 450, image: "/images/girl.png", available:true },
  { id: 9, name: "El Grito", price: 500, image: "/images/grito.png", available:true },
  { id: 10, name: "Carta Lovers", price: 500, image: "/images/lovers.png", available:true },
  { id: 11, name: "Luna Tarot", price: 500, image: "/images/luna.png", available:true },
  { id: 12, name: "Mariposa", price: 500, image: "/images/mariposa.png", available:true },
  { id: 110, name: "Mariposa Azul", price: 500, image: "/images/mariposaazul.png", available:true },
  { id: 13, name: "MTV", price: 500, image: "/images/mtv.png", available:false },
  { id: 14, name: "Ola de Kanawa", price: 500, image: "/images/ola.png", available:true },
  { id: 15, name: "Estampita Paisaje", price: 450, image: "/images/pasiaje1.png", available:true },
  { id: 16, name: "Queen Cartas", price: 500, image: "/images/queen.png", available:true },
  { id: 17, name: "Reader Carta", price: 450, image: "/images/reader.png", available:true },
  { id: 18, name: "Sol Tarot", price: 500, image: "/images/sol.png", available:true },
  { id: 19, name: "Treat People With Kindness", price: 500, image: "/images/tpwk.png", available:true },
  { id: 20, name: "Spinetta Artaud", price: 500, image: "/images/artaud.png", available:true },
  { id: 21, name: "Almendra", price: 450, image: "/images/almendra.png", available:true },
  { id: 22, name: "Dino", price: 500, image: "/images/dino.png", available:true },
  { id: 23, name: "Deftones", price: 450, image: "/images/deftones.png", available:true },
  { id: 24, name: "Estampita Di María (5x8cm)", price: 550, image: "/images/estampita_dimaria.png", available:true },
  { id: 25, name: "Estampita Messi (5x8cm)", price: 550, image: "/images/estampita_messi.png", available:true },
  { id: 26, name: "Estampita Julián (5x8cm)", price: 550, image: "/images/julian.png", available:true },
  { id: 27, name: "Estampita Dibu (5x8cm)", price: 550, image: "/images/estampitadibu.png", available:true },
  { id: 28, name: "Fantasmita", price: 500, image: "/images/fantasmita.png", available:true },
  { id: 29, name: "Garfield", price: 500, image: "/images/garfield.png", available:true },
  { id: 30, name: "Good Days", price: 500, image: "/images/gooddays.png", available:true },
  { id: 31, name: "Study!", price: 500, image: "/images/study.png", available:true },
  { id: 32, name: "Alien", price: 500, image: "/images/alien.png", available:true },
  { id: 33, name: "Winnie Pooh", price: 500, image: "/images/winniep.png", available:true },
  { id: 34, name: "Ángel Caído", price: 500, image: "/images/angelcaido.png", available:true },
  { id: 35, name: "Arpa", price: 500, image: "/images/arpa.png", available:true },
  { id: 36, name: "Corazón", price: 500, image: "/images/corazon.png", available:true },
  { id: 37, name: "Encendedor", price: 500, image: "/images/encendedor.png", available:true },
  { id: 38, name: "Esqueleto en llamas", price: 500, image: "/images/esqueleto.png", available:true },
  { id: 39, name: "Flores rosas", price: 500, image: "/images/floores.png", available:true },
  { id: 40, name: "Ramo flores", price: 500, image: "/images/floress.png", available:true },
  { id: 41, name: "Flores Azules", price: 500, image: "/images/floresazules.png", available:true },
  { id: 42, name: "Arcoiris", price: 500, image: "/images/arcoiris.png", available:true},
  { id: 43, name: "Luna", price: 500, image: "/images/moon.png", available:true },
  { id: 44, name: "Margarita", price: 500, image: "/images/margarita.png", available:true },
  { id: 45, name: "Tyler ID", price: 500, image: "/images/tylerid.png", available:true},
  { id: 46, name: "MF DOOM", price: 500, image: "/images/mfdoom.png", available:true },
  { id: 47, name: "DAMN - Kendrick", price: 450, image: "/images/damn.png", available:true },
  { id: 48, name: "Chromakopia", price: 450, image: "/images/chromakopia.png", available:true },
  { id: 49, name: "Ojo Turco", price: 500, image: "/images/ojoturco.png", available:true },
  { id: 50, name: "Snoopy", price: 500, image: "/images/snoopy.png", available:true },
  { id: 51, name: "Here comes the sun", price: 500, image: "/images/sun.png", available:true },
  { id: 52, name: "Oscuro Extasis - Wos", price: 500, image: "/images/wos.png", available:true },
  { id: 53, name: "Tulipan", price: 450, image: "/images/tulipan.png", available:true },
  { id: 54, name: "Tom", price: 500, image: "/images/tom.png", available:true },
  { id: 55, name: "A Tim Burton Film", price: 500, image: "/images/timburton.png", available:true },
  { id: 56, name: "This is fine", price: 500, image: "/images/thisisfine.png", available:true },
  { id: 57, name: "Telephone", price: 500, image: "/images/telefono.png", available:true },
  { id: 58, name: "Tabla surf", price: 450, image: "/images/surf.png", available:true },
  { id: 59, name: "Stitch Hawai", price: 450, image: "/images/stichhawai.png", available:true },
  { id: 60, name: "Stitch", price: 500, image: "/images/stich.png", available:true },
  { id: 61, name: "Skate", price: 500, image: "/images/skate.png", available:true },
  { id: 62, name: "CARP", price: 500, image: "/images/carp.png", available:true },
  { id: 63, name: "Roman 10", price: 500, image: "/images/roman.png", available:true },
  { id: 64, name: "Bombonera", price: 500, image: "/images/bombonera.png", available:true },
  { id: 65, name: "Estampita Red", price: 500, image: "/images/red.png", available:true },
  { id: 66, name: "Estampita Lemon", price: 500, image: "/images/postal.png", available:true },
  { id: 67, name: "Police", price: 450, image: "/images/police.png", available:true },
  { id: 68, name: "Ojos gato", price: 450, image: "/images/ojosgato.png", available:true },
  { id: 69, name: "Escudo Central", price: 500, image: "/images/centralescudo.png", available:true },
  { id: 70, name: "Central Campeon", price: 500, image: "/images/campeon.png", available:true },
  { id: 71, name: "Soy Canaya", price: 450, image: "/images/canaya.png", available:true },
  { id: 72, name: "Escudo Nob", price: 500, image: "/images/nobescudo.png", available:true },
  { id: 73, name: "NOB", price: 500, image: "/images/nob.png", available:true },
  { id: 74, name: "Messi Newells", price: 450, image: "/images/messinob.png", available:true },
  { id: 75, name: "Messi Copa", price: 500, image: "/images/messicopa.png", available:true },
  { id: 76, name: "Messi Topo Gigio", price: 500, image: "/images/messi10.png", available:true },
  { id: 77, name: "AFA", price: 500, image: "/images/afa.png", available:true },
  { id: 78, name: "Estampita Diego", price: 500, image: "/images/diego.png", available:true },
  { id: 79, name: "Diego", price: 500, image: "/images/diego2.png", available:true },
  { id: 83, name: "Logo Nike", price: 450, image: "/images/nike.png", available:true },
  { id: 84, name: "NBA", price: 500, image: "/images/nba.png", available:true },
  { id: 85, name: "Nasa", price: 500, image: "/images/nasa.png", available:true },
  { id: 86, name: "Moño", price: 450, image: "/images/moño.png", available:true },
  { id: 87, name: "Miguel Angel", price: 500, image: "/images/miguelangel.png", available:true },
  { id: 88, name: "Parental Advisory", price: 500, image: "/images/advisory.png", available:true },
  { id: 89, name: "F1 Ferrari", price: 500, image: "/images/autoferrari.png", available:true },
  { id: 90, name: "Estampita Colapinto", price: 500, image: "/images/estampitacolapinto.png", available:true },
  { id: 91, name: "Formula 1", price: 500, image: "/images/f1.png", available:true },
  { id: 92, name: "Banderitas", price: 500, image: "/images/banderitas.png", available:true },
  { id: 93, name: "ACDC", price: 500, image: "/images/acdc.png", available:true },
  { id: 94, name: "Bon Jovi", price: 500, image: "/images/bonjovi.png", available:true },
  { id: 95, name: "Batman", price: 500, image: "/images/batman.png", available:true },
  { id: 96, name: "Capitan America", price: 500, image: "/images/capitanamerica.png", available:true },
  { id: 97, name: "Superman", price: 500, image: "/images/superman.png", available:true },
  { id: 98, name: "Marvel", price: 500, image: "/images/marvel.png", available:true },
  { id: 99, name: "Cartoon Network", price: 500, image: "/images/cartoon.png", available:true },
  { id: 100, name: "Flash", price: 500, image: "/images/flash.png", available:true },
  { id: 101, name: "Bad Idea Right?", price: 500, image: "/images/badidearight.png", available:true },
  { id: 102, name: "Coca Cola", price: 500, image: "/images/coca.png", available:true },
  { id: 103, name: "Malboro", price: 500, image: "/images/malboro.png", available:true },
  { id: 105, name: "Logo Vans", price: 450, image: "/images/logovans.png", available:true },
  { id: 106, name: "Zapatilla", price: 500, image: "/images/llanta.png", available:true },
  { id: 107, name: "Vans", price: 500, image: "/images/vans.png", available:true },
  { id: 108, name: "North Face", price: 500, image: "/images/northface.png", available:true },
  { id: 109, name: "DC", price: 500, image: "/images/dc.png", available:true }
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