import { createSlice } from "@reduxjs/toolkit";
import { login } from "../asyncThunks/authThunk";


const initialState = 
{
    userData: null,
    token: null,
    loading: false,
    error: null
};

export const authSlice = createSlice
(
    {
        name: 'auth',
        initialState,
        extraReducers: (builder) => 
        {
            builder
            .addCase(login.pending, (state, action) => 
            { 
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => 
            { 
                state.loading = false;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => 
            { 
                state.loading = false;
                state.error = 'error';
            })
        }
    }
);

export default authSlice.reducer;