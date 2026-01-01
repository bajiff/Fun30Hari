function Lampu({isOn}) {
  const lampStyle = `w-20 h-20 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ${
    isOn ? "bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.7)]" : "bg-gray-700"
  }`;
  return (
    <div className="flex flex-col items-center gap-5 mb-5">
    <div className={`${lampStyle}`}></div>
      <p>Ruang Tamu</p>
    </div>
  );
};

export default Lampu;