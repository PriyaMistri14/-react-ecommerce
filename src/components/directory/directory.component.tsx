import './directory.styles.css'


import Category from '../category/category.component';


export type DirectoryProps ={  
  categories:Categories[]
}


export type Categories= {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
}


const Directory = (props:DirectoryProps)=>{
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