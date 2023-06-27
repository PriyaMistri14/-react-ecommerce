
import './App.css';
import { Route, Routes } from 'react-router-dom';




// import Directory from './components/directory/directory.component';
// import Home from './routes/home/home.component';   // commented to implement lazy loading
import Navigation from './routes/navigation/navigation.component';
// import SignIn from './routes/sign_in/sign_in.component';

// for lazy loading
// import Auth from './routes/sign_in/sign_in.component';


// import Shop from './routes/shop/shop.component';


// import Chechout from './routes/chechout/checkout.component';

import { getCurrentUser, signOutUser } from './utils/firebase/firebase.util';

import { useDispatch } from 'react-redux';

import { setCurrentUser } from './store/user/user.action';

import { onAuthStateChangedLister } from './utils/firebase/firebase.util';
import { useEffect } from 'react';


import { checkUserSession } from './store/user/user.action';

import { signOutStart } from './store/user/user.action';

import { lazy } from 'react';

import { Suspense } from 'react';

import ErrorBoundary from './components/error-boundary/error-boundary.component';



// const Shop = () => {
//   return <h1>I am shop page!</h1>
// }





const App = () => {
  const dispatch = useDispatch()

  const Home = lazy(() => import('./routes/home/home.component'))
  const Shop = lazy(() => import('./routes/shop/shop.component'))
  const Auth = lazy(() => import('./routes/sign_in/sign_in.component'))
  const Chechout = lazy(() => import('./routes/chechout/checkout.component'))


  // commented to use getCurrentUser for saga 

  // useEffect(() => {
  //   signOutUser() 


  //   var res = onAuthStateChangedLister((user) => {
  //       dispatch(setCurrentUser(user))
  //       console.log("....................../////////////", user);

  //   })
  //   console.log("....................../////////////", res);

  //   return res

  // }, [])


  // created for saga
  useEffect(() => {
    // signOutUser()   // use saga
    dispatch(signOutStart())

    dispatch(checkUserSession())

  }, [])




  return (
    <Routes>
      <Route path='/' element={<Navigation />}>


        <Route index element={<ErrorBoundary><Suspense fallback={<div>Loading......Home page....</div>}><Home /></Suspense></ErrorBoundary>} />
        <Route path='shop/*' element={<ErrorBoundary><Suspense fallback={<div>Loading......Shop page....</div>}><Shop /></Suspense></ErrorBoundary>} />
        <Route path='sign_in' element={<ErrorBoundary><Suspense fallback={<div>Loading......Sign In page....</div>}><Auth /></Suspense></ErrorBoundary>} />
        <Route path='checkout' element={<ErrorBoundary><Suspense fallback={<div>Loading......Checkout page........</div>}><Chechout /></Suspense></ErrorBoundary>} />
      </Route>


    </Routes>


  );
}

export default App;
