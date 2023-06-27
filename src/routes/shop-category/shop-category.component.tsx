import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card/product-card.component"
// import { ProductContext } from "../../contexts/product.context"

import './shop-category.styles.css'

import { useSelector } from "react-redux"

import { selectCategoryMap } from "../../store/category/category.selector"

// for using thunk to display spinner

import { selectCategoryIsLoading } from "../../store/category/category.selector"

// import Spinner from "../../components/spinner/spinner.component"  // not used all its html and css is placed here



type CategoryRouteProps ={
    category:string
}



const ShopCategory = ()=>{
    // const {categoryMap} = useContext(ProductContext)  // commented to use redux 
    const categoryMap = useSelector(selectCategoryMap)
    console.log(">>>>><<<<<<<<category map in shop category", categoryMap);
    const isLoading = useSelector(selectCategoryIsLoading)  

    console.log("isloadingggggggggggggggggg", isLoading);
   
    const {category} = useParams<keyof CategoryRouteProps>() as CategoryRouteProps
    console.log(">>>>><<<<<<<<category map and category in shop category", categoryMap, category);

    const [products, setProducts] = useState(categoryMap[category])

    useEffect(()=>{
        console.log("////////in use effect products", products);
        setProducts(categoryMap[category])
        console.log("////////in after  use effect products", products);
        
    },[category, categoryMap])

    return(
        <div className="shop-category-preview">
        {
         isLoading ? <span className="loader">Loading....</span>:
          products &&  products.map((product)=><ProductCard  product={product}/>)
        }
        </div>
    )

    

}

export default ShopCategory


