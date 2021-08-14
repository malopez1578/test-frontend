import { createAsyncThunk } from '@reduxjs/toolkit'
import { get } from './API.service'

const getTags = createAsyncThunk('tags/list', async (idUser) => {
  const response = await get(`tag`)
  return response.data.data
})

export { getTags }
