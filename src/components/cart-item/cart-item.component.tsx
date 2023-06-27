
import './cart-item.styles.css'


import {CartItemTypes } from '../../store/cart/cart.types';

export type CartItemProps = {
item:CartItemTypes
}

const CartItem = ({ item } : CartItemProps) => {
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



