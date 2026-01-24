// ? Ini App.jsx
import {Card, ToggleTheme} from "./components/ui"; 

import { ThemeContext } from "./context";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <section className={`flex flex-col justify-center items-center min-h-screen transition-colors gap-6 ${theme === "light" ? "bg-white" : "bg-slate-800 text-white"}`}>
        <h1 className="text-3xl">Magic Theme</h1>
        <Card/>
        <ToggleTheme/>
      </section>
    </ThemeContext.Provider>
  );
};

export default App;