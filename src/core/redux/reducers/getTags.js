import { createSlice } from '@reduxjs/toolkit'
import { getTags } from '../../services/tags.service'

const getTagsSlice = createSlice({
  name: 'getTags',
  initialState: {
    loading: 'idle',
    tags: [],
  },
  extraReducers: {
    [getTags.fulfilled]: (state, { payload }) => {
      state.loading = 'finish'
      state.tags = payload
    },
    [getTags.reject]: (state, { payload }) => {
      state.loading = 'finish'
    },
    [getTags.pendiing]: (state, { payload }) => {
      state.loading = 'pending'
    },
  },
})

const getTagsReducer = getTagsSlice.reducer

export { getTagsReducer }
