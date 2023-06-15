

import { compose, applyMiddleware, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'

const middleware = [logger]


const composedEnhanced = compose(applyMiddleware(...middleware))

export const store = createStore(rootReducer, undefined, composedEnhanced)




