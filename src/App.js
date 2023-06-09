
import './App.css';
import { Route, Routes } from 'react-router-dom';




// import Directory from './components/directory/directory.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign_in/sign_in.component';





const Shop = () => {
  return <h1>I am shop page!</h1>
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>} />
        <Route path='sign_in' element={<SignIn />} />
      </Route>


    </Routes>


  );
}

export default App;
