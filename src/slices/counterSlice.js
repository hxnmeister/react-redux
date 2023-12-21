import { createSlice } from "@reduxjs/toolkit";

const initialState = 
{
    value: 0,
};

export const counterReducer = createSlice
(
    {
        name: 'counter', //slice name
        initialState,
        reducers:
        {
            increment: (state) => { ++state.value },
            decrement: (state) => { --state.value },
            increaseBy: (state, action) => { state.value += action.payload }
        }
    }
);

export const { increment, decrement, increaseBy } = counterReducer.actions;
export default counterReducer.reducer;