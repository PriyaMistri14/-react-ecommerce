
// import { createContext, useState } from "react"

// import { addCollectionsAndDocuments,getCategoriesAndDocuments } from "../utils/firebase/firebase.util.js";


// import SHOP_DATA from '../shop-data.js'
// import { useEffect } from "react";

// console.log(".................................product data", SHOP_DATA);

// export const ProductContext = createContext({
//     categoryMap:{}
    
   
// })


// export const ProductProvider= ({children})=>{
//     const [categoryMap, setcategoryMap] = useState({})
//     const value = {categoryMap}
   


// // use this use effect only once to create a collection in firebase , after creating we dont have to run it again so it is commited

//     // useEffect(()=>{
//     //     addCollectionsAndDocuments('categories',SHOP_DATA )

//     // },[])


// useEffect(()=>{
//    const getCategory = async ()=>{
//        const categoryMap = await getCategoriesAndDocuments()
//        console.log("./.././/.../././/.//./.././..categoryMap", categoryMap);
//        setcategoryMap(categoryMap)
//     }

//     getCategory()
// },[])

  

//     return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>

// }

