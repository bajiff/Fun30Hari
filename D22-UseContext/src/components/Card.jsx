import { useContext } from "react";
import { ThemeContext } from "../context";

const Card = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section className={`rounded-xl p-6 w-80 transition-colors duration-300 ${
      theme === "dark" ? "bg-slate-600 text-gray-100 shadow-slate-900/50" : "bg-slate-600 text-white shadow-gray-500"
    }`}>
      <h2>Halo Saya Adalah Card</h2>
      <p>Saya tidak menggunakan props untuk kasus ini tetapi saya menggunakan <span className="font-bold mx-1 underline">{theme}</span>. Karena saya menyadap atau mendengarkan Context</p>
    </section>
  )
}

export default Card;