// import logo from './logo.svg';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';

function App() 
{
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
        <NavLink to='/registration'>Register</NavLink>
      </nav>

      <Outlet/>
    </div>
  );
}

export default App;
