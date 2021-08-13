import { combineReducers } from '@reduxjs/toolkit'
import { getCommentsByIdReducer } from './getCommentsById'
import { getPostsReducer } from './getPosts'
import { getUserReducer, setUserProfile } from './getUser'

export { setUserProfile }

export const reducers = combineReducers({
  getPostsReducer,
  getUserReducer,
  getCommentsByIdReducer,
})
