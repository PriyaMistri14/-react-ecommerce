import { useContext } from "react";


import { ProductContext } from "../../contexts/product.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import './shop-categories-preview.styles.css'


const ShopCategoriesPreview = () => {
    const { categoryMap } = useContext(ProductContext)
    console.log("vnvgdfjgdf", categoryMap);


    return (
        <div className="shop-container">
            {Object.keys(categoryMap).map((title) => {
    const products= categoryMap[title]
    return <CategoryPreview  title={title} products={products} />


            }
                

            )


            }
        </div>
    )



}


export default ShopCategoriesPreview
