import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../../services/posts.service'

const getPostsSlice = createSlice({
  name: 'getPosts',
  initialState: {
    loading: 'idle',
    listPosts: [],
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = 'finish'
      state.listPosts.push(...payload)
    },
    [getPosts.rejected]: (state, { payload }) => {
      state.loading = 'finish'
    },
    [getPosts.pending]: (state, { payload }) => {
      state.loading = 'pending'
    },
  },
})

const getPostsReducer = getPostsSlice.reducer

export { getPostsReducer }
