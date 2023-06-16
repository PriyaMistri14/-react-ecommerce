import './product-card.styles.css'


import ButtonComponent from '../button/button.component'

import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'


// ......redux........
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action' 
import { selectCartItems } from '../../store/cart/cart.selector'






const ProductCard = ({product})=>{
    const {id, name, price, imageUrl} = product
    // console.log("////////////////////////image url", product);
    // const {addItemToCart} = useContext(CartContext)  //this line is commented to use redux
  
// const addProductToCart=() => addItemToCart(product)  // this line is commented to use redux

const cartItems = useSelector(selectCartItems)
const dispatch = useDispatch()

const addProductToCart = ()=> dispatch(addItemToCart(cartItems,product))





    return(
        <div className='product-card-container'>
            <img src={imageUrl}  alt='image'/>
            <div>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <ButtonComponent onClick={addProductToCart} >Add to card</ButtonComponent>


        </div>

    )


}

export default ProductCard


