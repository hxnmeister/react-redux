import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import postsReducer from "../slices/postSlice";

export const store = configureStore
(
    {
        reducer: 
        {
            counter: counterReducer,
            posts: postsReducer,
        },
    }
);