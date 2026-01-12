import {HomePage, AboutPage, NotFound, UserList } from "./pages/index";
import {NavBar} from "./components/index"


import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
  <>
    <NavBar/>

    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/users/' element={<UserList/>}/>
        <Route path='/users/:detailUser' element={<UserList/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  </>
  );
};

export default App;