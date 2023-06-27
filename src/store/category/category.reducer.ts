import { AnyAction } from "redux"
import { CATEGORY_ACTION_TYPES } from "./category.types"
import { CategoryMap } from "./category.types"


export type CategoryState={
    readonly categoryMap:CategoryMap,
    readonly isLoading:boolean,
    readonly error: Error | null
}


const INITIAL_STATE:CategoryState = {
    categoryMap: {},
    isLoading: false,
    error: null
}


export const categoryReducer = (state = INITIAL_STATE, action = {} as AnyAction) => {
    //  const { type, payload } = action
    switch (action.type) {

        case CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP:
            return {
                ...state,
                categoryMap: action.payload
            }

        case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START:
            return {
                ...state,
                isLoading: true
            }

        case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categoryMap: action.payload
            }
        
            
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILED:
            return {
                ...state,
                isLoading:false,
                error:action.payload
            }

        default:
            return state


    }


}
