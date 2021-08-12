import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from "./API.service";

const getPosts = createAsyncThunk(
    'posts/get',
    async () => {
        const response = await get('post')
        return response.data.data
    }
)

export { getPosts };
