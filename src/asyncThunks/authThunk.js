import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/index";
import { getToken, removeToken, setToken } from "../utils/helperFunctions";

export const login = createAsyncThunk('auth/login', async (payload) => 
{
    const responseData = (await api.post('/login', payload)).data;
    setToken(responseData.token);

    return responseData;
});

export const registration = createAsyncThunk('auth/registration', async (payload) => (await api.post('/register', payload)).data);

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async () => 
{
    try
    {
        const token = getToken();
        api.defaults.headers.Authorization = `Bearer ${token}`;
    
        return (await api.get('/user')).data;
    }
    catch
    {
        removeToken();
    }
});

export const logout = createAsyncThunk('auth/fetchUserData', () => 
{
    removeToken();
});