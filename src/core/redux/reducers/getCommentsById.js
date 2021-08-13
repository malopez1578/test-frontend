import { createSlice } from '@reduxjs/toolkit'
import { getCommentsById } from '../../services/posts.service'

const getCommentsByIdSlice = createSlice({
  name: 'getCommentsById',
  initialState: {
    commentsData: {},
    loading: 'idle',
  },
  extraReducers: {
    [getCommentsById.fulfilled]: (state, { payload }) => {
      state.loading = 'finish'
      state.commentsData = payload
    },
    [getCommentsById.rejected]: (state, { payload }) => {
      state.loading = 'finish'
    },
    [getCommentsById.pending]: (state, { payload }) => {
      state.loading = 'pending'
    },
  },
})

const getCommentsByIdReducer = getCommentsByIdSlice.reducer

export { getCommentsByIdReducer }
