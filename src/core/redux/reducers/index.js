import { combineReducers } from '@reduxjs/toolkit'
import { getPostsReducer } from './getPosts'

export {
    getPostsReducer
}

export const reducers = combineReducers({getPostsReducer})