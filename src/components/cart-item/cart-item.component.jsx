
import './cart-item.styles.css'


const CartItem = ({ item }) => {
    console.log("///\\\\\\/////\\\\\////\\item", item);
    const { name, imageUrl, price, quantity } = item
    return (

        <div className='cart-item-container'>
            <img src={imageUrl} alt='CartItem' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='quantity'>{quantity} *  ${price}</span>
            </div>
        </div>
    )

}

export default CartItem



