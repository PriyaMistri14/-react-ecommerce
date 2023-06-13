import { useInsertionEffect } from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext= createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0,
    setCartCount:()=>{},
    setCartItems:()=>{},
    clearItemFromCart:()=>{},
    total:0,
    setTotal:()=>{}
})


export const CartProvide= ({children})=>{

const [isCartOpen, setIsCartOpen] = useState(false)
const [cartItems, setCartItems] = useState([])
const [cartCount, setCartCount] = useState(0)
const [total, setTotal] = useState(0)

useEffect(()=>{
    console.log(" ////////////// use effect is called");

const newTotal = cartItems.reduce((tot,item)=> tot + item.quantity * item.price , 0)

console.log("........total", newTotal);

setTotal(newTotal)

},[cartItems])







const addItemToCart= (productToAdd)=>{
    console.log("////////////////////////////////\\\\\\\\\\\\\\\\product to add", productToAdd);
//    var cartItemssss = [cartItems,{...productToAdd,quantity:1}]
//    console.log("/\/\/\/\/", cartItemssss);
 const existingCartItem = cartItems.find((cartItem)=>cartItem.id=== productToAdd.id)


 if (existingCartItem){
   var itemsss= cartItems.map((cartItem) => cartItem.id=== productToAdd.id ?
     {...cartItem,quantity:cartItem.quantity+1}
    :cartItem)

    setCartItems(itemsss)
    setCartCount(cartCount+1)
 }
 else{

     setCartItems([...cartItems,{...productToAdd,quantity:1}])
     setCartCount(cartCount+1)
 }

}


// ...................................remove whole item.........
 const clearItemFromCart= (itemToClear)=>{
    console.log("////////////////////////////////\\\\\\\\\\\\\\\\product to clear", itemToClear);
     var filterd = cartItems.filter((item)=> item.id !== itemToClear.id )
     console.log("....................after remove", filterd);
     setCartItems(filterd)

 }




const value = {isCartOpen, setIsCartOpen,cartItems,cartCount, setCartCount, addItemToCart, setCartItems,clearItemFromCart, total,setTotal}


    return <CartContext.Provider value={value} >{children}</CartContext.Provider>

}






