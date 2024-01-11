import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/index";
import { setToken } from "../utils/helperFunctions";

export const login = createAsyncThunk('auth/login', async (payload) => 
{
    const responseData = (await api.post('/login', payload)).data;
    setToken(responseData.token);

    return responseData;
});