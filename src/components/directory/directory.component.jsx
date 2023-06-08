import './directory.styles.css'


import Category from '../category/category.component';

const Directory = (props)=>{
    const {categories} = props


return (

    <div className='categories-container'>

      {categories.map((category) => (


        <div className='category-container'>
          <Category category={category} />

        </div>
      ))}

    </div>

)

}

export default Directory