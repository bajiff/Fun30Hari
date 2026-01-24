// ? Ini ToggleTheme.jsx
import { useContext } from "react";
import { ThemeContext } from "../../context";

const ToggleTheme = () => {
  const {theme,setTheme} = useContext(ThemeContext);
  return (
      <button className={`flex items-center justify-center duration-300 rounded-full shadow-2xl shadow-gray-500 w-12 h-12 transition-all hover:rotate-90 active:scale-95 ${theme === "light" ? "bg-slate-800 text-white" : "bg-yellow-600 text-slate-400"}`} onClick={() => setTheme(theme === "light" ? "dark" : "light")} title={`${theme === "light" ? "Ubah ke Dark" : "Ubah ke Light"}`}>{theme === "light" ? "🌞" : "🌙"}</button>
  )
}

export default ToggleTheme;