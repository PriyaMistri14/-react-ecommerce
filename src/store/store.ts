

import { compose, applyMiddleware, createStore, Middleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'  // used insted of createStore
import logger from 'redux-logger'


import { rootReducer } from './root-reducer'

// import thunk from 'redux-thunk' // we can use only one async task handler at a time (use redux-thunk or redux saga one at a time) , so it is commented to use redux saga

import { rootSaga } from './root-saga'

import { PersistConfig } from 'redux-persist'

import createSagaMiddleware from '@redux-saga/core'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'
import persistReducer from 'redux-persist/es/persistReducer'




// for persistant storage(local storage)
// const { logger } = require('redux-logger');

// const {persistReducer} = require( 'redux-persist/es/persistReducer')
// const {persistStore} = require( 'redux-persist/es/persistStore')
// const {storage} = require('redux-persist/lib/storage')

export type RootState = ReturnType<typeof rootReducer>


type ExtendedPersistConfig = PersistConfig<RootState> &{
    whitelist:(keyof RootState)[]
}


const persist_config: ExtendedPersistConfig ={
    key:'root',  // means entire application
    storage,     // local storage
    whitelist:['cart'],  // except this we have to store all except this
 


}




// const persist_config ={
//     key:'root',  // means entire application
//     storage,     // local storage
//     blacklist:['user'],  // except this we have to store all except this
 


// }


const sagaMiddleware = createSagaMiddleware()



const persistedReducer = persistReducer(persist_config, rootReducer)

// const middleware = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)  // without thunk

// const middleware = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean)   // with thunk (use thunk)


const middleware = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware]
.filter((middleware):middleware is Middleware => Boolean(middleware))   // with redux saga (use sagaMiddleware)


declare global{
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:typeof compose
    }
}


const composedEnhacer =  (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// const composedEnhancers = compose(applyMiddleware(...middleware))  // for without redux developer tool extension in crome

const composedEnhancers = composedEnhacer(applyMiddleware(...middleware))  // with redux dev tool extension in crome


// export const store = createStore(rootReducer, undefined, composedEnhanced)  // without persistor storage

export const store = createStore(persistedReducer, undefined, composedEnhancers)  //with persistor storage

// after creating store to use saga we have to tell our saga to run using run method
sagaMiddleware.run(rootSaga)


export const persistor = persistStore(store)
