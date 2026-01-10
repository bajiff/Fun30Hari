import { HomePage, AboutPage, NotFound, UserList } from "./pages/index";
import { Routes, Route, NavLink} from 'react-router-dom';

const App = () => {
  return (
  <>
    <nav className=''>
        <ul className='flex items-center justify-between gap-2 w-lg mt-10 bg-red-200 max-w-xl py-2 mx-auto '>
          <li>
            <NavLink className={({isActive}) => `rounded border shadow px-3 py-2 ${isActive ? "bg-green-400 " : "bg-red-400"}`} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => `rounded border shadow px-3 py-2 ${isActive ? "bg-green-400 " : "bg-red-400"}`} to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => `rounded border shadow px-3 py-2 ${isActive ? "bg-green-400 " : "bg-red-400"}`} to="/about">About</NavLink>
          </li>
        </ul>
    </nav>

    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  </>
  );
};

export default App;