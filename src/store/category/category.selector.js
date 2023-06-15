import { createSelector } from "reselect";

const selectCategoryReducer = (state)=>{
    console.log("selecter 1 is called");
    return state.category
}


// this will called when only value for category is changed , and if value does not change than it use previously calculated value insted of calculating again

export const selectCategoryMap = createSelector(
    [selectCategoryReducer],
    (categoryMap)=>{
        console.log("selecter 2 is called");
        return categoryMap.categoryMap

    }
)



//  this will called all the time even if value of category is same , and calculate again value of category

// export const selectCategoryMap = (state)=>{ 
//     console.log("/////\\\\\.................select Category map is called");
//     return state.category.categoryMap
// }

