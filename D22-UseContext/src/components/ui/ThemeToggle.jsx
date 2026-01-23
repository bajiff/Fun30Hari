import { useContext } from "react";
import { ThemeContext } from "../../context";

const ThemeToggle = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
    className={`px-6 py-5 rounded active:scale-95 font-semibold ${theme === "dark" ? "bg-yellow-400" : "bg-slate-800"}`}
    >
      Ganti ke {theme === "light" ? "Dark 🌙" : "light 🌞"}
    </button>
  );
};

export default ThemeToggle;