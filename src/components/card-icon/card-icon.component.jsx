
import './card-icon.styles.css'


import { ReactComponent as Icon } from '../../assets/shopping-bag.svg'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

//....................for redux

import {useSelector ,useDispatch } from 'react-redux'

import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'




const CardIcon = ()=>{

//  const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext) // this line is commented to use redux

const isCartOpen = useSelector(selectIsCartOpen)
const cartCount = useSelector(selectCartCount)

const dispatch = useDispatch()


 const setCart= ()=>{
    dispatch(setIsCartOpen(!isCartOpen))
 }


return (
    <div className='card-icon-container' onClick={setCart}>
        <Icon className='card-icon' />
        <span className='icon-cnt'>{cartCount}</span>

    </div>
)

}

export default CardIcon


