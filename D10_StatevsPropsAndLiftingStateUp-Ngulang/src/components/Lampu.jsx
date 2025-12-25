const Lampu = ({isOn}) => {
  const lampuStyle = `flex flex-col items-center justify-center mx-auto rounded-full w-[100px] h-[100px] shadow-lg mt-5 ${isOn ? "text-black" : "text-white"} ${isOn ? "bg-yellow-400" : "bg-gray-900"}`
  return(
    <section className={lampuStyle} >
      {isOn ? "Nyala" : "Mati"}
    </section>
  )
};

export default Lampu;