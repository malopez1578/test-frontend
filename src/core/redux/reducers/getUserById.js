import { createSlice } from '@reduxjs/toolkit'
import { getUserById } from '../../services/users.service'

const getUserByIdSlice = createSlice({
  name: 'getUserById',
  initialState: {
    loading: 'idle',
    characterProfile: {},
  },
  extraReducers: {
    [getUserById.fulfilled]: (state, { payload }) => {
      state.loading = 'finish'
      state.characterProfile = payload
    },
    [getUserById.reject]: (state, { payload }) => {
      state.loading = 'finish'
    },
    [getUserById.pendiing]: (state, { payload }) => {
      state.loading = 'pending'
    },
  },
})

const getUserByIdReducer = getUserByIdSlice.reducer

export { getUserByIdReducer }
