 import './category.styles.css'
 import { useNavigate } from 'react-router-dom'
 import { Categories } from '../directory/directory.component'
 

export type CategoryProps={
  category:Categories
} 

const  Category = (props:CategoryProps)=>{

    const {category} = props
    const navigate = useNavigate()

    const onNavigateHandler= ()=> navigate(category.route)


    

return (
    <div onClick={onNavigateHandler} className='background-img' style={{backgroundImage: `url(${category.imageUrl})`, backgroundColor: 'red'}} >
      <div className='category-body-containerr'>
      <h3>{category.title}</h3>
      <p>Shop Now</p>
      </div>
  </div>
     
)



}
export default Category