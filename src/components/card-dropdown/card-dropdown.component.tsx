
import './card-dropdown.styles.css'

import ButtonComponent from '../button/button.component'


import CartItem from '../cart-item/cart-item.component'

import { useContext } from 'react'
// import { CartContext } from '../../contexts/cart.context'


import { useNavigate } from 'react-router-dom'

//..............for redux..........

import { useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'




const CardDrpdown = () => {

    // const { cartItems } = useContext(CartContext)  // this line is commented to use redux , reducer
     const cartItems = useSelector(selectCartItems)
    
    console.log("cart items", cartItems);



    // ..................................fun to navigate....................
    const navigate = useNavigate()


    const goToCheckout= ()=>{
navigate("/checkout")

    }




    return (
        <div className='card-dropdown-container'>
            <div className='cart-items'>
                { cartItems.map(item=><CartItem item={item}/>) }

            </div>



            <ButtonComponent type='submit' onClick={goToCheckout} >GO TO CHECKOUT</ButtonComponent>


        </div>
    )

}


export default CardDrpdown




