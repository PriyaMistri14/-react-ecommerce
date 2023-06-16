
import './checkout.styles.css'

import { CartContext } from '../../contexts/cart.context'

import { useContext } from 'react'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

// .............for redux........

import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'



const Chechout = () => {

    //  const { cartItems, addItemToCart, cartCount, setCartCount, setCartItems, total } = useContext(CartContext)   // this line is commented to use redux(reducer)
 const cartItems = useSelector(selectCartItems)
 const total = useSelector(selectCartTotal)


    // console.log("////////////////////////////////", cartItems);


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

    return (
        <div className='checkout-container'>

            <div className='checkout-header'>
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



            {
                cartItems.map((item) => {

                    return <CheckoutItem item={item} />
                    // <div>
                    //     <span>{name}</span>
                    //     <br /><br />
                    //     <span>{quantity}</span>
                    //     <br /><br />
                    //     <span onClick={() => { addItemToCart(item) }}  >Increment</span>
                    //     <br /><br />
                    //     <span onClick={() => { removeItemFromCart(item) }}>Decrement</span>

                    // </div>

                })

            }
            <span className='total'>Total: ${total} </span>
        </div>

        // <div>
        //     I am Checkout page
        // </div>
    )


}

export default Chechout




