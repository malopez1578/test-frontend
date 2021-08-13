import { createAsyncThunk } from '@reduxjs/toolkit'
import { get } from './API.service'

const getPosts = createAsyncThunk('posts/get', async () => {
  const response = await get('post')
  return response.data.data
})

const getCommentsById = createAsyncThunk(
  'post/commentsById',
  async (idPost) => {
    const response = await get(`post/${idPost}/comment`)

    return response.data.data
  }
)

export { getPosts, getCommentsById }
