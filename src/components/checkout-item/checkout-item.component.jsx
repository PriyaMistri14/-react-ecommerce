
import './checkout-item.styles.css'
import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

//.......................redux............

import { useDispatch, useSelector} from 'react-redux'

import { addItemToCart, clearItemFromCart,removeItemFromCart } from '../../store/cart/cart.action'

import { selectCartItems } from '../../store/cart/cart.selector'



const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item

//  const { clearItemFromCart, addItemToCart,removeItemFromCart, cartItems } = useContext(CartContext)  // this line is commented for redux

const cartItems = useSelector(selectCartItems)

const dispatch = useDispatch()

 const clearItemFromCartHandler = ()=> dispatch(clearItemFromCart(cartItems,item))
 const addProductToCartHandler = () =>dispatch(addItemToCart(cartItems,item))
 const removeItemFromCartHandler = ()=> dispatch(removeItemFromCart(cartItems,item))

// ........................remove item.....................

// this fun is now centralized on context....................
// const removeItemFromCart = (item) => {
//     const { id } = item
//     var newCartItem = []

//     cartItems.map((it) => {
//         if (id !== it.id) {
//             newCartItem.push(it)

//         }
//         else if (id === it.id && it.quantity != 0) {
//             it.quantity = it.quantity - 1
//             if (it.quantity != 0) {
//                 newCartItem.push(it)
//             }
//         }
//     })

//     console.log(".............................///////////////////....................", newCartItem);
//     setCartItems(newCartItem)
// }






// .................................

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} />
            </div>

            <span className='checkout-name'>{name}</span>
            <span className='checkout-quantity'>
                <div className='arrow' onClick={removeItemFromCartHandler}>
                    &#10094;

                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addProductToCartHandler}>
                    &#10095;

                </div>
                
                
                </span>
            <span className='checkout-price'>{price}</span>
            <div className='remove-button' onClick={clearItemFromCartHandler}>&#10005;</div>
           



            {/* <div className='item-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Discription</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>

            </div>
            <span className='total'>Total:0</span> */}


        </div>
    )

}

export default CheckoutItem

