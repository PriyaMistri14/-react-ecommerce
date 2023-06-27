

import { CategoryItem } from "../category/category.types";
import { CART_ACTION_TYPES } from "./cart.types";

import { CartItemTypes } from "./cart.types";


export const setIsCartOpen = (bool:boolean) => {
    console.log("/////////set is crat open called with", bool);
    return ({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool })
}




 export const addItemToCart = (cartItems:CartItemTypes[],productToAdd:CategoryItem) => {
    console.log("////////////////////////////////\\\\\\\\\\\\\\\\product to add", productToAdd);
    //    var cartItemssss = [cartItems,{...productToAdd,quantity:1}]
    //    console.log("/\/\/\/\/", cartItemssss);
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)


    if (existingCartItem) {
        var itemsss = cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)

        // updateCartItemsReducer(itemsss)
        return ({type:CART_ACTION_TYPES.SET_CART_ITEMS, payload:itemsss})

    }
    else {

        const newCartItems = [...cartItems, { ...productToAdd, quantity: 1 }]
        return ({type:CART_ACTION_TYPES.SET_CART_ITEMS, payload:newCartItems})

    }

}





export const removeItemFromCart = (cartItems:CartItemTypes[],item:CartItemTypes) => {
    const { id } = item
    var newCartItem = [] as CartItemTypes[]

    cartItems.map((it) => {
        if (id !== it.id) {
            newCartItem.push(it)

        }
        else if (id === it.id && it.quantity !== 0) {
            it.quantity = it.quantity - 1
            if (it.quantity !== 0) {
                newCartItem.push(it)
            }
        }
    })

    console.log(".............................///////////////////....................", newCartItem);
    return ({type:CART_ACTION_TYPES.SET_CART_ITEMS, payload:newCartItem})
}








export const clearItemFromCart = (cartItems:CartItemTypes[],itemToClear:CartItemTypes) => {
    console.log("////////////////////////////////\\\\\\\\\\\\\\\\product to clear", itemToClear);
    var filterd = cartItems.filter((item) => item.id !== itemToClear.id)
    console.log("....................after remove", filterd);
    return ({type:CART_ACTION_TYPES.SET_CART_ITEMS, payload:filterd})

}


