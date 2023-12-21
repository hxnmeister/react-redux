import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseBy, increment } from '../slices/counterSlice';

const Counter = () => 
{
    const count = useSelector( (state /*хранит в себе все значения redurers из store.js*/) => state.counter.value );
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={ () => dispatch(decrement()) }>-</button>
            {count}
            <button onClick={ () => dispatch(increment()) }>+</button>
            <button onClick={ () => dispatch(increaseBy(2)) }>+2</button>
        </div>
    );
}

export default Counter;
