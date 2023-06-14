import './directory.styles.css'


import Category from '../category/category.component';

const Directory = (props)=>{
    const {categories} = props


return (

    <div className='directory-item-container'>

      {categories.map((category) => (


        <div className='directory-container'>
          <Category category={category} />

        </div>
      ))}

    </div>

)

}

export default Directory