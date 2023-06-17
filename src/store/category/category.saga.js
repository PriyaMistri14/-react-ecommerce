
import { takeLatest,all, call, put } from "redux-saga/effects"

import { fetchCategorySuccess, fetchCategoryFailed } from "./category.action"

import { CATEGORY_ACTION_TYPES } from "./category.types"


import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util"


 export function* fetchCategoryAsync(){
    try {
        const categoryMap = yield call(getCategoriesAndDocuments)
        yield put(fetchCategorySuccess(categoryMap))

    } catch (error) {

        yield  put(fetchCategoryFailed(error))

    }

 }



export function* onFetchCategory(){
    yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START,fetchCategoryAsync)
}



export function* categorySaga(){
    yield all([call(onFetchCategory)])
}
