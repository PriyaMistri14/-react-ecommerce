import './product-card.styles.css'


import ButtonComponent from '../button/button.component'

import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'


const ProductCard = ({product})=>{
    const {id, name, price, imageUrl} = product
    // console.log("////////////////////////image url", product);
    const {addItemToCart} = useContext(CartContext)



const addProductToCart=() => addItemToCart(product)



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


