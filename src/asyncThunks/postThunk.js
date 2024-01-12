import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/index";

export const allPosts = createAsyncThunk('allPosts', async () => (await api.get('/posts')).data);
// export const allPosts = createAsyncThunk('allPosts', async () => (await api.get('/posts-with-commentaries')).data);

export const addPost = createAsyncThunk('addPost', async (payload, { rejectWithValue }) => 
{
    try
    {
        return (await api.post('/posts', payload)).data
    }
    catch(error)
    {
        return rejectWithValue(error.response.data)
    }
});
