// ? Ini App.jsx
import {HomePage, AboutPage, NotFound, UserList, MovieDetailPage} from "./pages/index";
import {NavBar, Product, DetailProducts, DetailUser } from "./components/index"

import { ThemeContext } from "./context";

import {Routes, Route} from 'react-router-dom';
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
  <ThemeContext.Provider value={{theme,setTheme}}>
    <NavBar/>

    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/users/:idUser' element={<DetailUser/>}/>
        <Route path='/movie/:id' element={<MovieDetailPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product-detail' element={<DetailProducts/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  </ThemeContext.Provider>
  );
};

export default App;