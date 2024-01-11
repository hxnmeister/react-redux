import { createSlice } from "@reduxjs/toolkit";
import { allPosts, addPost } from "../asyncThunks/postThunk";


const initialState = 
{
    posts: [],
    loading: false,
    error: null
};

export const postSlice = createSlice
(
    {
        name: 'posts',
        initialState,
        extraReducers: (builder) => 
        {
            builder
            .addCase(allPosts.pending, (state, action) => 
            { 
                state.loading = true;
            })
            .addCase(allPosts.fulfilled, (state, action) => 
            { 
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(allPosts.rejected, (state, action) => 
            { 
                state.loading = false;
                state.error = 'error';
            })
            .addCase(addPost.pending, (state, action) => 
            { 
                state.loading = true;
            })
            .addCase(addPost.fulfilled, (state, action) => 
            { 
                state.loading = false;
                state.posts.push(action.payload);
            })
            .addCase(addPost.rejected, (state, action) => 
            { 
                state.loading = false;
                state.error = Object.keys(action.payload.errors).join(',');
            })
        }
    }
);

export default postSlice.reducer;