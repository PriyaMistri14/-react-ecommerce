
import './cart-item.styles.css'


const CartItem = ({item})=>{
    console.log("///\\\\\\/////\\\\\////\\item", item);
     const {name, quantity} = item 
 return (
    // <div>
    // { item.map((it)=>{
    //     <div>
    //     <p>{name}</p>
    //     <span>{quantity}</span>
    // </div>
    // })
        
    // }</div>
    
    <div>
        <h2>{name}</h2>
        <span>{quantity}</span>
    </div>
 )

}

export default CartItem



