import { createSelector } from "reselect"


const selectCartReducer = (state)=> state.cart


export const selectCartItems = createSelector([selectCartReducer],(cart)=>cart.cartItems)


export const selectIsCartOpen = createSelector([selectCartReducer],(cart)=>cart.isCartOpen)

export const selectCartCount = createSelector([selectCartItems], (newCartItems)=>newCartItems.reduce((tot, item) => tot + item.quantity, 0))


export const selectCartTotal = createSelector([selectCartItems], (newCartItems)=>newCartItems.reduce((tot, item) => tot + item.quantity * item.price, 0))




