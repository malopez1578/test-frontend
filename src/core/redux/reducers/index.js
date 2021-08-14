import { combineReducers } from '@reduxjs/toolkit'
import { getCommentsByIdReducer } from './getCommentsById'
import { getPostsReducer } from './getPosts'
import { getTagsReducer } from './getTags'
import { getUserReducer, setUserProfile } from './getUser'
import { getUserByIdReducer } from './getUserById'

export { setUserProfile }

export const reducers = combineReducers({
  getPostsReducer,
  getUserReducer,
  getCommentsByIdReducer,
  getUserByIdReducer,
  getTagsReducer,
})
