import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import postsReducer from "../slices/postSlice";
import authReducer from "../slices/authSlice";

export const store = configureStore
(
    {
        reducer: 
        {
            counter: counterReducer,
            posts: postsReducer,
            auth: authReducer
        },
    }
);