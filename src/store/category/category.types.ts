import { number, string } from "yargs"


export enum CATEGORY_ACTION_TYPES{
    SET_CATEGORY_MAP='SET_CATEGORY_MAP',     
    FETCH_CATEGORY_START='FETCH_CATEGORY_START',
    FETCH_CATEGORY_SUCCESS='FETCH_CATEGORY_SUCCESS',
    FETCH_CATEGORY_FAILED='FETCH_CATEGORY_FAILED',


}

export type CategoryItem={
id: number, 
name: string,
imageUrl: string,
price: number

}

export type Category={
    title:string,
    items: CategoryItem[]
}
export type CategoryMap={
    [key:string]:CategoryItem[]
}