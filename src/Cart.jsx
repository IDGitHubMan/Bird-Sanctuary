import bonusItems from './data/bonusItems';

export default function Cart({cart, setCart}) {
    let total = 0
    let discount = (cart.length >= 3) ? 10 : 0
    let bonuses = 0

    return (
        <>
        <h3>Cart</h3>
        <h3>Discount:{discount}%</h3>
        <ol>
        { cart.map((item) => {
            total += item.amount
            if(total > 100 && total < 300) {
                bonuses = 1
            } else if (total > 300 && total <500) {
                bonuses = 2
            } else if (total > 500 && total <1000) {
                bonuses = 3
            } else if (total > 1000) {
                bonuses = 4
            }
            return (
                
                <li> {item.name} ${item.amount} </li>
                
                )
                
            } 
            )
        }
        <h3>Total: ${total *= (100-discount)/100} </h3>
    
        </ol>
        <ul>
            {bonusItems.map((item,index)=>{
                if(index < bonuses) {
                    return <li>
                        {item}
                    </li>
                }
            })}
        </ul>
        </>
    )
}