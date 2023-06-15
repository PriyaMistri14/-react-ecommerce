import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card/product-card.component"
import { ProductContext } from "../../contexts/product.context"

import './shop-category.styles.css'

import { useSelector } from "react-redux"

import { selectCategoryMap } from "../../store/category/category.selector"

const ShopCategory = ()=>{
    // const {categoryMap} = useContext(ProductContext)  // commented to use redux 
    const categoryMap = useSelector(selectCategoryMap)
   
    const {category} = useParams()

    const [products, setProducts] = useState(categoryMap[category])

    useEffect(()=>{
        console.log("////////in use effect products", products);
        setProducts(categoryMap[category])
        console.log("////////in after  use effect products", products);
        
    },[category, categoryMap])

    return(
        <div className="shop-category-preview">
        {
          products &&  products.map((product)=><ProductCard  product={product}/>)
        }
        </div>
    )

    

}

export default ShopCategory


