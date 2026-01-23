// ? Ini App.jsx

import { ThemeContext } from "./context";

import { useState } from "react";
import {ThemeToggle} from "./components/ui";
import {Card} from "./components"


const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={`flex flex-col justify-center items-center gap-4 min-h-screen transition-color duration-300 ${theme === "dark" ? "bg-slate-800" : "bg-gray-100"}`}>
        <h1 className={`font-bold text-3xl ${theme === "dark" ? "text-white" : "text-slate-800"}`}>Ilmu Perubahan Theme tanpa props 🌗</h1>
        
        <Card/>
        <ThemeToggle/>
      </div>
    
      
    </ThemeContext.Provider>
  );
};

export default App;