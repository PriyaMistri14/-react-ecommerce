
import './card-dropdown.styles.css'

import ButtonComponent from '../button/button.component'


import CartItem from '../cart-item/cart-item.component'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'





const CardDrpdown = () => {

    const { cartItems } = useContext(CartContext)
    console.log("cart items", cartItems);


    return (
        <div className='card-dropdown-container'>
            <div className='cart-items'>
                { cartItems.map(item=><CartItem item={item}/>) }

            </div>



            <ButtonComponent type='submit'>GO TO CHECKOUT</ButtonComponent>


        </div>
    )

}


export default CardDrpdown




