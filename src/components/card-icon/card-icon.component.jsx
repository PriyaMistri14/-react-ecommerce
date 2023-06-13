
import './card-icon.styles.css'


import { ReactComponent as Icon } from '../../assets/shopping-bag.svg'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'




const CardIcon = ()=>{

 const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
 

 const setCart= ()=>{
    setIsCartOpen(!isCartOpen)
 }


return (
    <div className='card-icon-container' onClick={setCart}>
        <Icon className='card-icon' />
        <span className='icon-cnt'>{cartCount}</span>

    </div>
)

}

export default CardIcon


