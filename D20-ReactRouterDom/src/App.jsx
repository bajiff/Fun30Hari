import { UserList } from './components/Index'
import { HomePage, AboutPage, NotFound } from "./pages/Index";
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
  <>
    <nav className=''>
        <ul className='flex items-center justify-between gap-2 w-lg mt-10 bg-red-200 max-w-xl py-2 mx-auto '>
          <li>
            <Link className='rounded border shadow bg-green-400 px-3 py-2' to="/">Home</Link>
          </li>
          <li>
            <Link className='rounded border shadow bg-green-400 px-3 py-2' to="/users">Users</Link>
          </li>
          <li>
            <Link className='rounded border shadow bg-green-400 px-3 py-2' to="/about">About</Link>
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