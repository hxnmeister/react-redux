import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => 
{
    const { token, loading }= useSelector( (state) => state.auth );

    if(loading == 'pending' || loading == 'idle')
    {
        return <h1>Loading...</h1>;
    }

    return token ? children : <Navigate to='/login'/>;
}

export default PrivateRoute;
