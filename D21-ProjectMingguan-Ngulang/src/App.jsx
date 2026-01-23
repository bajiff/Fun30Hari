// ? Ini App.jsx
import {HomePage, AboutPage, NotFound, UserList, MovieDetailPage} from "./pages/index";
import {NavBar, Product, DetailProducts, DetailUser } from "./components/index"

import {Routes, Route} from 'react-router-dom';
import {Card, ToggleTheme} from "./components/ui"; 

import { ThemeContext } from "./context";
import { useContext } from "react";

const App = () => {
  const {theme, setTheme} = useContext("light");

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <section className={`flex flex-col justify-center items-center min-h-screen transition-colors ${theme === "light" ? "bg-white" : "bg-slate-800 text-white"}`}>
        <h1>Magic Theme</h1>
        <Card/>
        <ToggleTheme/>
      </section>
    </ThemeContext.Provider>
  );
};

export default App;