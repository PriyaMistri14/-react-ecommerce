

import { compose, applyMiddleware, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'  // used insted of createStore
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'

import thunk from 'redux-thunk'


// for persistant storage(local storage)

import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'

const persist_config ={
    key:'root',  // means entire application
    storage,     // local storage
    backlist:['user']  // except this we have to store all except this


}


const persistedReducer = persistReducer(persist_config, rootReducer)

// const middleware = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)  // without thunk

const middleware = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean)   // with thunk (use thunk)

const composedEnhacer =  (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// const composedEnhancers = compose(applyMiddleware(...middleware))  // for without redux developer tool extension in crome

const composedEnhancers = composedEnhacer(applyMiddleware(...middleware))  // with redux dev tool extension in crome


// export const store = createStore(rootReducer, undefined, composedEnhanced)  // without persistor storage

export const store = createStore(persistedReducer, undefined, composedEnhancers)  //with persistor storage

export const persistor = persistStore(store)
