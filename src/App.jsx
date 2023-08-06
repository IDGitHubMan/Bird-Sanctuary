import { useState } from "react";
import Card from "./Card";
import birdData from "./data/birds.js";
import Cart from "./Cart";
import Checkout from "./Checkout";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="mainPage">
      <div className="sidePanel">
        <p className="cart">
        <Cart  cart={cart} setCart={setCart} />
        </p>
        <p className="checkout">
        <Checkout  cart={cart} setCart={setCart} />
        </p>
      </div>
      <div className="cards">
        {birdData.map((bird) => {
          return (
            <Card
              cart={cart}
              name={bird.name}
              id={bird.id}
              image={bird.img}
              amount={bird.amount}
              setCart={setCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
