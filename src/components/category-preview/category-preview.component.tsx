import './category-preview.styles.css'

import ProductCard from '../product-card/product-card.component'

import { Link } from 'react-router-dom'
import { CategoryItem } from '../../store/category/category.types'

export type CategoryPreviewProps ={
    title:string,
    products:CategoryItem[]
}

const CategoryPreview = ({title,products}:CategoryPreviewProps)=>{

    
    return(
        <div className='category-preview-container'>
            <h2><Link className='title' to={title} >{title}</Link></h2>
            <div className='preview'>
            {
             products.filter((_,idx)=>idx < 4).map((product) => <ProductCard product={product} />)  
            }
        </div>
        </div>
    )
}


export default CategoryPreview

