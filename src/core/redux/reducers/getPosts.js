import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../../services/posts.service'

const getPostsSlice = createSlice({
  name: 'getPosts',
  initialState: {
    listPosts: [],
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.listPosts.push(...payload)
    },
    [getPosts.rejected]: (state, { payload }) => {},
    [getPosts.pending]: (state, { payload }) => {},
  },
})

const getPostsReducer = getPostsSlice.reducer

export { getPostsReducer }
