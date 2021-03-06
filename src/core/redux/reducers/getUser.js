import { createSlice } from '@reduxjs/toolkit'

const getUser = createSlice({
  name: 'getUserProfile',
  initialState: {
    userProfile: {},
  },
  reducers: {
    setUserProfile(state, { payload }) {
      state.userProfile = payload?.profileObj || {}
    },
  },
})

const { setUserProfile } = getUser.actions

const getUserReducer = getUser.reducer

export { getUserReducer, setUserProfile }
