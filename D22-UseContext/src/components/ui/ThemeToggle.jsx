import { useContext } from "react";
import { ThemeContext } from "../../context";

const ThemeToggle = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
    className={`px-6 py-5 rounded active:scale-95 font-semibold cursor-pointer transition-transform ${theme === "dark" ? "bg-yellow-600" : "bg-slate-600 text-white"}`}
    >
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
};

export default ThemeToggle;