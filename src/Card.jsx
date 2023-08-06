export default function Card({name,image,amount, id ,cart, setCart}){
return <div className="birdCard">
        <h2>{name}</h2>
        <h2>Price: ${amount}</h2>
        <img src={image} alt="" width="200" height="200"></img>
        <button 
          className="birds"
          onClick={() => setCart([...cart, { name, amount }])}
          >
            Adopt
       </button>
        </div>
}