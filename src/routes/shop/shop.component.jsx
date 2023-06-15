 import { Route, Routes } from 'react-router-dom'
 import { useParams } from 'react-router-dom'
import ShopCategory from '../shop-category/shop-category.component'
 import ShopCategoriesPreview from '../shop-categories-preview/shop-categories-preview'

import './shop.styles.css'


import { setcategoryMap } from '../../store/category/category.action'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.util'
import { useDispatch } from 'react-redux'

import { useEffect } from 'react'


// ................................replacing this file with shop category preview to implement nested route......
const Shop = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        const getCategory = async ()=>{
            const categoryMap = await getCategoriesAndDocuments()
            console.log("./.././/.../././/.//./.././..categoryMap", categoryMap);
            dispatch(setcategoryMap(categoryMap))
         }
     
         getCategory()
     },[])
     


        return (  
                <Routes>
                    <Route index element={<ShopCategoriesPreview /> }/>
                    <Route path=':category' element={<ShopCategory />} />
                </Routes>

            )


}
export default Shop

