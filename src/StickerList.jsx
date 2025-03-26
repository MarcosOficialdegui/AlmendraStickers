import "./StickerList.css";

const stickers = [
  { id: 1, name: "Sol Argentina", price: 500, image: "/images/solarg.png"},
  { id: 2, name: "Un verano sin ti", price: 4, image: "/images/badbunny.png" },
  { id: 3, name: "Daddy", price: 4, image: "/images/daddy.png" },
  { id: 4, name: "Estampita Diego", price: 4, image: "/images/diego.png" },
  { id: 5, name: "Diego", price: 4, image: "/images/diego2.png" },
  { id: 6, name: "Fight Club", price: 4, image: "/images/fightclub.png" },
  { id: 7, name: "Classic Garage", price: 4, image: "/images/garage.png" },
  { id: 8, name: "Just A Girl", price: 4, image: "/images/girl.png" },
  { id: 9, name: "The World Is Yours", price: 4, image: "/images/globo.png" },
  { id: 10, name: "El Grito", price: 4, image: "/images/grito.png" },
  { id: 11, name: "Carta Lovers", price: 4, image: "/images/lovers.png" },
  { id: 12, name: "Luna Tarot", price: 4, image: "/images/luna.png" },
  { id: 13, name: "Mariposa", price: 4, image: "/images/mariposa.png" },
  { id: 14, name: "MTV", price: 4, image: "/images/mtv.png" },
  { id: 15, name: "Ola de Kanawa", price: 4, image: "/images/ola.png" },
  { id: 16, name: "Estampita Paisaje", price: 4, image: "/images/paisaje1.png" },
  { id: 17, name: "Queen Cartas", price: 4, image: "/images/queen.png" },
  { id: 18, name: "Reader Carta", price: 4, image: "/images/reader.png" },
  { id: 19, name: "Pickle Rick", price: 4, image: "/images/rick.png" },
  { id: 20, name: "Sol Tarot", price: 4, image: "/images/sol.png" },
  { id: 21, name: "Treat People With Kindness", price: 4, image: "/images/tpwk.png" },
  { id: 22, name: "Spinetta Artaud", price: 4, image: "/images/artaud.png" },
  { id: 23, name: "Dino", price: 4, image: "/images/dino.png" },
  { id: 24, name: "Estampita Di María", price: 4, image: "/images/estampita_dimaria.png" },
  { id: 25, name: "Estampita Messi", price: 4, image: "/images/estampita_messi.png" },
  { id: 26, name: "Estampita Julián", price: 4, image: "/images/julian.png" },
  { id: 27, name: "Estampita Dibu", price: 4, image: "/images/estampitadibu.png" },
  { id: 28, name: "Fantasmita", price: 4, image: "/images/fantasmita.png" },
  { id: 29, name: "Flash", price: 4, image: "/images/flash.png" },
  { id: 30, name: "Garfield", price: 4, image: "/images/garfield.png" },
  { id: 31, name: "Good Days", price: 4, image: "/images/gooddays.png" },
  { id: 32, name: "Study!", price: 4, image: "/images/study.png" },
  { id: 33, name: "Alien", price: 4, image: "/images/alien.png" },
  { id: 34, name: "Winnie Pooh", price: 4, image: "/images/winniep.png" },
  { id: 35, name: "Ángel Caído", price: 4, image: "/images/angelcaido.png" },
  { id: 36, name: "Ruta 40", price: 4, image: "/images/arg.png" },
  { id: 37, name: "Arpa", price: 4, image: "/images/arpa.png" },
  { id: 38, name: "Chromakopia", price: 4, image: "/images/chromakopia.png" },
  { id: 39, name: "Corazón", price: 4, image: "/images/corazon.png" },
  { id: 40, name: "Deftones", price: 4, image: "/images/deftones.png" },
  { id: 41, name: "Encendedor", price: 4, image: "/images/encendedor.png" },
  { id: 42, name: "Esqueleto en llamas", price: 4, image: "/images/esqueleto.png" },
  { id: 43, name: "Flores rosas", price: 4, image: "/images/floores.png" },
  { id: 44, name: "Ramo flores", price: 4, image: "/images/floress.png" },
  { id: 45, name: "Zapatilla", price: 4, image: "/images/llanta.png" },
  { id: 46, name: "Vans", price: 4, image: "/images/vans.png" },
  { id: 47, name: "Tyler ID", price: 4, image: "/images/tylerid.png" },
  { id: 48, name: "Ojo Turco", price: 4, image: "/images/ojoturco.png" }
];

  
  function StickerList({ addToCart }) {
    return (
      <div className="sticker-container">
        {stickers.map((sticker) => (
          <div key={sticker.id} className="sticker-card">
            <img src={`${process.env.PUBLIC_URL}${sticker.image}`} alt={sticker.name} />
            <p>{sticker.name} - ${sticker.price}</p>
            <button className="sticker-button" onClick={() => addToCart(sticker)}>Agregar</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default StickerList;