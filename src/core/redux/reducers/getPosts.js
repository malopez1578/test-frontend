import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../../services/posts.service'

const getPostsSlice = createSlice({
  name: 'getPosts',
  initialState:{},
  extraReducers: {
      [getPosts.fulfilled]:(state, {payload}) => {
        console.log("🚀 ~ file: getPosts.js ~ line 9 ~ fulfilled", payload)
      },
      [getPosts.rejected]:(state, {payload}) => {
        console.log("🚀 ~ file: getPosts.js ~ line 9 ~ rejected", payload)
      },
      [getPosts.pending]:(state, {payload}) => {
        console.log("🚀 ~ file: getPosts.js ~ line 9 ~ pending", payload)
      }
  }
})

const getPostsReducer = getPostsSlice.reducer

export { getPostsReducer }
