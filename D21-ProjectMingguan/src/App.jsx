import {HomePage, AboutPage, NotFound, UserList } from "./pages/index";
import {NavBar} from "./components/index"


import {Routes, Route} from 'react-router-dom';
import MovieDetailPage from "./pages/MovieDetailPage";

const App = () => {
  return (
  <>
    <NavBar/>

    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/users/:detailUser' element={<UserList/>}/>
        <Route path='/movie' element={<MovieDetailPage/>}/>
        <Route path='/movie/:slug' element={<MovieDetailPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  </>
  );
};

export default App;