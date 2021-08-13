import { combineReducers } from '@reduxjs/toolkit'
import { getPostsReducer } from './getPosts'
import { getUserReducer, setUserProfile } from './getUser'

export { getPostsReducer, getUserReducer, setUserProfile }

export const reducers = combineReducers({ getPostsReducer, getUserReducer })
