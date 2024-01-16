import { createSlice } from "@reduxjs/toolkit";
import { login, registration, fetchUserData } from "../asyncThunks/authThunk";
import { getToken } from "../utils/helperFunctions";


const initialState = 
{
    userData: null,
    token: null,
    loading: 'idle',
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
                state.loading = 'pending';
            })
            .addCase(login.fulfilled, (state, action) => 
            { 
                state.loading = 'succeeded';
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => 
            { 
                state.loading = 'failed';
                state.error = 'error';
            })
            .addCase(registration.pending, (state, action) => 
            { 
                state.loading = 'pending';
            })
            .addCase(registration.fulfilled, (state, action) => 
            { 
                state.loading = 'succeeded';
                state.userData = action.payload;
            })
            .addCase(registration.rejected, (state, action) => 
            { 
                state.loading = 'failed';
                state.error = 'error';
            })
            .addCase(fetchUserData.pending, (state, action) => 
            { 
                state.loading = 'pending';
            })
            .addCase(fetchUserData.fulfilled, (state, action) => 
            { 
                state.loading = 'succeeded';
                state.userData = action.payload;
                state.token = getToken();
            })
            .addCase(fetchUserData.rejected, (state, action) => 
            { 
                state.loading = 'failed';
                state.error = 'error';
            })
        }
    }
);

export default authSlice.reducer;