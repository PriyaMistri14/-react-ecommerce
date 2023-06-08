 import './category.styles.css'

const Category = (props)=>{

    const{category} = props

return (
    <div className='background-img' style={{backgroundImage: `url(${category.imageUrl})`, backgroundColor: 'red'}} >
      <div className='category-body-container'>
      <h3>{category.title}</h3>
      <p>Shop Now</p>
      </div>
  </div>
     
)



}
export default Category