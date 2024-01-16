// import logo from './logo.svg';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserData, logout } from './asyncThunks/authThunk';

function App() 
{
  const { userData, token } = useSelector( (state) => state.auth );
  const dispatch = useDispatch();

  useEffect(() => 
  {
    dispatch(fetchUserData());
  },[]);

  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/posts'>Posts</NavLink>

        { !token ? 
        <>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/registration'>Register</NavLink>
        </> : 
        <>
          { userData.name }
          <button onClick={ () => dispatch(logout()) }>Logout</button>
        </> }

        
        
      </nav>

      <Outlet/>
    </div>
  );
}

export default App;
