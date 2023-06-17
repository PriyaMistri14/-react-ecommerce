 import { Route, Routes } from 'react-router-dom'
 import { useParams } from 'react-router-dom'
import ShopCategory from '../shop-category/shop-category.component'
 import ShopCategoriesPreview from '../shop-categories-preview/shop-categories-preview'

import './shop.styles.css'


import { setcategoryMap } from '../../store/category/category.action'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.util'
import { useDispatch } from 'react-redux'

import { useEffect } from 'react'

// import { fetchCategoryAsync } from '../../store/category/category.action' //  for use saga this line is commented

import { fetchCategotyStart } from '../../store/category/category.action'




// ................................replacing this file with shop category preview to implement nested route......
const Shop = () => {

    const dispatch = useDispatch()

// this is commented to used thunk and all this task is done inside actions in category action in redux

    // useEffect(()=>{
    //     const getCategory = async ()=>{
    //         const categoryMap = await getCategoriesAndDocuments()
    //         console.log("./.././/.../././/.//./.././..categoryMap", categoryMap);
    //         dispatch(setcategoryMap(categoryMap))
    //      }
     
    //      getCategory()
    //  },[])


// with thunk....  commented to use saga


    // useEffect(()=>{
       
    //         dispatch(fetchCategoryAsync)
    //      },
     
    //     [])



// with saga


useEffect(()=>{
       
    dispatch(fetchCategotyStart())
 },

[])
     


        return (  
                <Routes>
                    <Route index element={<ShopCategoriesPreview /> }/>
                    <Route path=':category' element={<ShopCategory />} />
                </Routes>

            )


}
export default Shop

