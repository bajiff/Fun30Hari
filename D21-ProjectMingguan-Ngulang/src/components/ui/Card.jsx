import { useContext }  from "react";
import { ThemeContext } from "../../context";

const Card = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section className={`rounded px-4 py-2 max-w-96 font-bold transition-colors text-2xl ${theme === "light" ? "bg-slate-800 text-white" : "bg-slate-500 text-yellow-400"}`}>
      <p>Theme sekarang tuh bisa gonta ganti dari {theme} ke {theme === "light" ? "dark" : "light"}</p>
      </section>
  )
}

export default Card;