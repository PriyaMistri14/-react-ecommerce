 import { Route, Routes } from 'react-router-dom'
 import { useParams } from 'react-router-dom'
import ShopCategory from '../shop-category/shop-category.component'
 import ShopCategoriesPreview from '../shop-categories-preview/shop-categories-preview'

import './shop.styles.css'

// ................................replacing this file with shop category preview to implement nested route......
const Shop = () => {
        return (  
                <Routes>
                    <Route index element={<ShopCategoriesPreview /> }/>
                    <Route path=':category' element={<ShopCategory />} />
                </Routes>

            )


}
export default Shop

