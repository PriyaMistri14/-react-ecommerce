import { async } from "@firebase/util"
import { CATEGORY_ACTION_TYPES } from "./category.types"

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util"

// this is without thunk 
export const setcategoryMap = (categoryMap) => {
    return ({ type: CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, payload: categoryMap })
}



//.....with thunk


export const fetchCategotyStart = () => {
    return ({ type: CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START })
}


export const fetchCategorySuccess = (categoryMap) => {
    return ({ type: CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, payload: categoryMap })


}

export const fetchCategoryFailed = (error) => {
    return ({ type: CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILED, payload: error })

}


export const fetchCategoryAsync = async (dispatch) => {

    dispatch(fetchCategotyStart())

    try {
        const categoryMap = await getCategoriesAndDocuments()
        dispatch(fetchCategorySuccess(categoryMap))

    } catch (error) {

        dispatch(fetchCategoryFailed(error))

    }


}