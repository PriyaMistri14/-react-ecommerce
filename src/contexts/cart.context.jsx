import { createContext, useState } from "react";

export const CartContext= createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{}
})


export const CartProvide= ({children})=>{

const [isCartOpen, setIsCartOpen] = useState(false)
const [cartItems, setCartItems] = useState([])


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
 }
 else{

     setCartItems([...cartItems,{...productToAdd,quantity:1}])
 }





}

const value = {isCartOpen, setIsCartOpen,cartItems, addItemToCart}


    return <CartContext.Provider value={value} >{children}</CartContext.Provider>

}






