// ? Ini Card.jsx
import { useContext }  from "react";
import { ThemeContext } from "../../context";

const Card = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section className={`rounded px-4 py-2 max-w-96 font-bold transition-colors text-2xl ${theme === "light" ? "bg-white text-slate-800 shadow-xl border border-gray-100" : "bg-slate-700 text-white shadow-2xl shadow-black"}`}>
      <p>Theme sekarang tuh bisa gonta ganti dari {theme} ke {theme === "light" ? "dark" : "light"}</p>
      </section>
  )
}

export default Card;