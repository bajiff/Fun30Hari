import { useContext } from "react";

const ToggleTheme = () => {
  const {theme, setTheme} = useContext("light");
  return (
    <button className={`px-3 py-2 ${theme === "light" ? "bg-slate-800 text-white" : "bg-yellow-400 text-slate-400"}`}>{theme === "light" ? "🌞" : "🌙"}</button>
  )
}

export default ToggleTheme;