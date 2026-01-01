
const Saklar = ({isOn, togglerButton }) => {
  const saklarStyle = `flex flex-col items-center justify-center mx-auto rounded px-10 mt-5 text-white transition-all duration-300 shadow-xl ${isOn ? "bg-green-600" : "bg-red-600"} `
  return (
  <button className={saklarStyle} onClick={togglerButton}>{isOn ? "ON" : "OFF"}</button>
  )
}

export default Saklar;