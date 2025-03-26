import "./StickerList.css";

const stickers = [
    { id: 1, name: "Sol Argentina", price: 500, image: "images/solarg.png"},
    { id: 2, name: "Un verano sin ti", price: 4,image:"images/badbunny.png" },
    { id: 3, name: "Daddy", price: 4,image:"images/daddy.png" },
    { id: 4, name: "Estampita diego", price: 4,image:"images/diego.png" },
    { id: 5, name: "Diego", price: 4,image:"images/diego2.png" },
    { id: 6, name: "Fight Club", price: 4,image:"images/fightclub.png" },
    { id: 7, name: "Classic Garage", price: 4,image:"images/garage.png" },
    { id: 9, name: "Just A Girl", price: 4,image:"images/girl.png" },
    { id: 10, name: "The World Is Yours", price: 4,image:"images/globo.png" },
    { id: 11, name: "El Grito", price: 4,image:"images/grito.png" },
    { id: 12, name: "Carta Lovers", price: 4,image:"images/lovers.png" },
    { id: 13, name: "Luna Tarot", price: 4,image:"images/luna.png" },
    { id: 14, name: "Mariposa", price: 4,image:"images/mariposa.png" },
    { id: 15, name: "MTV", price: 4,image:"images/mtv.png" },
    { id: 16, name: "Ola de Kanawa", price: 4,image:"images/ola.png" },
    { id: 17, name: "Estampita Paisaje", price: 4,image:"images/pasiaje1.png" },
    { id: 18, name: "Queen Cartas", price: 4,image:"images/queen.png" },
    { id: 19, name: "Reader Carta", price: 4,image:"images/reader.png" },
    { id: 20, name: "Pickle Rick", price: 4,image:"images/rick.png" },
    { id: 21, name: "Sol Tarot", price: 4,image:"images/sol.png" },
    { id: 22, name: "Treat People With Kindness", price: 4,image:"images/tpwk.png" },
    { id: 23, name: "Spinetta Artaud", price: 4,image:"images/artaud.png" },
    { id: 24, name: "Dino", price: 4,image:"images/dino.png" },
    { id: 25, name: "Estampita Di Maria", price: 4,image:"images/estampita_dimaria.png" },
    { id: 26, name: "Estampita Messi", price: 4,image:"images/estampita_messi.png" },
    { id: 27, name: "Estampita Julian", price: 4,image:"images/julian.png" },
    { id: 28, name: "Estampita Dibu", price: 4,image:"images/estampitadibu.png" },
    { id: 29, name: "Fantasmita", price: 4,image:"images/fantasmita.png" },
    { id: 30, name: "Flash", price: 4,image:"images/flash.png" },
    { id: 31, name: "Garfield", price: 4,image:"images/garfield.png" },
    { id: 32, name: "Good Days", price: 4,image:"images/gooddays.png" },
    { id: 33, name: "Study!", price: 4,image:"images/study.png" },
    { id: 34, name: "Alien", price: 4,image:"images/alien.png" },
    { id: 35, name: "Winnie Pooh", price: 4,image:"images/winnie p.png" },
    { id: 36, name: "Angel Caido", price: 4,image:"images/angel caido.png" },
    { id: 37, name: "Ruta 40", price: 4,image:"images/arg.png" },
    { id: 38, name: "Arpa", price: 4,image:"images/arpa.png" },
    { id: 38, name: "Chromakopia", price: 4,image:"images/chromakopia.png" },
    { id: 38, name: "Corazon", price: 4,image:"images/corazon.png" },
    { id: 38, name: "Deftones", price: 4,image:"images/deftones.png" },
    { id: 38, name: "Arpa", price: 4,image:"images/arpa.png" },
    { id: 38, name: "Encendedor", price: 4,image:"images/encendedor.png" },
    { id: 39, name: "Esqueleto en llamas", price: 4,image:"images/esqueleto.png" },
    { id: 40, name: "Flores rosas", price: 4,image:"images/floores.png" },
    { id: 41, name: "Ramo flores", price: 4,image:"images/floress.png" },
    { id: 42, name: "Encendedor", price: 4,image:"images/encendedor.png" },
    { id: 43, name: "Zapatilla", price: 4,image:"images/llanta.png" },
    { id: 42, name: "Vans", price: 4,image:"images/vans.png" },
    { id: 42, name: "Tyler ID", price: 4,image:"images/tylerid.png" },
    { id: 43, name: "Paisaje", price: 4,image:"images/pasiaje1.png" },
    { id: 43, name: "Ojo Turco", price: 4,image:"images/ojoturco.png" },
    
  ];
  
  function StickerList({ addToCart }) {
    return (
      <div className="sticker-container">
        {stickers.map((sticker) => (
          <div key={sticker.id} className="sticker-card">
            <img src={sticker.image} alt={sticker.name} />
            <p>{sticker.name} - ${sticker.price}</p>
            <button className="sticker-button" onClick={() => addToCart(sticker)}>Agregar</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default StickerList;