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
      <div className={`flex flex-col justify-center items-center min-h-screen transition-color duration-300 ${theme === "dark" ? "bg-slate-800" : "bg-gray-100"}`}>
        <h1 className={`font-bold text-3xl ${theme === "dark" ? "text-white" : "text-slate-800"}`}>Ilmu Perubahan Theme tanpa props 🌗</h1>
      </div>
    
      
    </ThemeContext.Provider>
  );
};

export default App;