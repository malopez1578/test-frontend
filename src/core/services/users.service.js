import { createAsyncThunk } from '@reduxjs/toolkit'
import { get } from './API.service'

const getUserById = createAsyncThunk('users/userById', async (idUser) => {
  const response = await get(`user/${idUser}`)
  return response.data
})

export { getUserById }
