// ? Ini App.jsx
import {Card, ToggleTheme} from "./components/ui"; 
import BankPintar from "./components/ui/BankPintar";
import DompetBos from "./components/ui/DompetBos";

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
        <DompetBos/>
        <BankPintar/>
      </section>
    </ThemeContext.Provider>
  );
};

export default App;