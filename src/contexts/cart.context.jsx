
import { createContext, useState, useEffect, useReducer } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    setCartCount: () => { },
    setCartItems: () => { },
    clearItemFromCart: () => { },
    total: 0,
    setTotal: () => { },
    removeItemFromCart:()=>{}
})

// ..............................useRecucer.......................
const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    total: 0,

}


const CART_ACTION = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    
}



const cartReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case CART_ACTION.SET_CART_ITEMS:
            return {
                ...state,
                ...payload

            }

        case CART_ACTION.SET_IS_CART_OPEN:
            console.log("set is cart open is called..........", payload);
            return {
                ...state,
                isCartOpen: payload
            }

        
        default:

            throw new Error(`There is an error to handle this type ${type}`)



    }

}





export const CartProvide = ({ children }) => {

    // const [isCartOpen, setIsCartOpen] = useState(false)  //this lines are commented to use reducer insted of useState 
    // const [cartItems, setCartItems] = useState([])
    // const [cartCount, setCartCount] = useState(0)
    // const [total, setTotal] = useState(0)
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const { cartItems, cartCount, total, isCartOpen } = state


    console.log(".............//////iscartopen", isCartOpen);






    //this is also commented to use reducer....................... 
    // useEffect(() => {
    //     console.log(" ////////////// use effect is called");

    //     const newTotal = cartItems.reduce((tot, item) => tot + item.quantity * item.price, 0)

    //     console.log("........total", newTotal);

    //     setTotal(newTotal)

    // }, [cartItems])







    // const addItemToCart = (productToAdd) => {
    //     console.log("////////////////////////////////\\\\\\\\\\\\\\\\product to add", productToAdd);
    //     //    var cartItemssss = [cartItems,{...productToAdd,quantity:1}]
    //     //    console.log("/\/\/\/\/", cartItemssss);
    //     const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)


    //     if (existingCartItem) {
    //         var itemsss = cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
    //             { ...cartItem, quantity: cartItem.quantity + 1 }
    //             : cartItem)

    //         setCartItems(itemsss)
    //         setCartCount(cartCount + 1)
    //     }
    //     else {

    //         setCartItems([...cartItems, { ...productToAdd, quantity: 1 }])
    //         setCartCount(cartCount + 1)
    //     }

    // }







    // ...................................remove whole item.........
    // const clearItemFromCart = (itemToClear) => {
    //     console.log("////////////////////////////////\\\\\\\\\\\\\\\\product to clear", itemToClear);
    //     var filterd = cartItems.filter((item) => item.id !== itemToClear.id)
    //     console.log("....................after remove", filterd);
    //     setCartItems(filterd)

    // }


    const addItemToCart = (productToAdd) => {
        console.log("////////////////////////////////\\\\\\\\\\\\\\\\product to add", productToAdd);
        //    var cartItemssss = [cartItems,{...productToAdd,quantity:1}]
        //    console.log("/\/\/\/\/", cartItemssss);
        const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)


        if (existingCartItem) {
            var itemsss = cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem)

            updateCartItemsReducer(itemsss)

        }
        else {

            const newCartItems = [...cartItems, { ...productToAdd, quantity: 1 }]
            updateCartItemsReducer(newCartItems)

        }

    }




  
const removeItemFromCart = (item) => {
    const { id } = item
    var newCartItem = []

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
    updateCartItemsReducer(newCartItem)
}



  




    const clearItemFromCart = (itemToClear) => {
        console.log("////////////////////////////////\\\\\\\\\\\\\\\\product to clear", itemToClear);
        var filterd = cartItems.filter((item) => item.id !== itemToClear.id)
        console.log("....................after remove", filterd);
        updateCartItemsReducer(filterd)

    }




    const updateCartItemsReducer = (newCartItems) => {

        const newCartTotal = newCartItems.reduce((tot, item) => tot + item.quantity * item.price, 0)
        const newCartCount = newCartItems.reduce((tot, item) => tot + item.quantity, 0)

        dispatch({
            type: CART_ACTION.SET_CART_ITEMS, payload: { cartItems: newCartItems, cartCount: newCartCount, total: newCartTotal }
        })


    }


    const setIsCartOpen = (bool) => {
        console.log("/////////set is crat open called with", bool);
        dispatch({ type: CART_ACTION.SET_IS_CART_OPEN, payload: bool })
    }


  


    const value = { isCartOpen, removeItemFromCart,setIsCartOpen, cartItems, cartCount, addItemToCart, clearItemFromCart, total }


    return <CartContext.Provider value={value} >{children}</CartContext.Provider>

}






