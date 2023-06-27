import { useContext } from "react";


// import { ProductContext } from "../../contexts/product.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import './shop-categories-preview.styles.css'

import { useSelector } from "react-redux";

import { selectCategoryMap } from "../../store/category/category.selector";


const ShopCategoriesPreview = () => {
    // const { categoryMap } = useContext(ProductContext)  // this line is commented to use redux
     const categoryMap = useSelector(selectCategoryMap)
    
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
