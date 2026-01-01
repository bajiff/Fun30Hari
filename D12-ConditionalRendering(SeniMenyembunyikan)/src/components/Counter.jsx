import { useState } from "react";
const Counter = () => {
  const [number,setNumber] = useState(0);
  const isEven = number % 2 === 0;
  const colorNumber = isEven ? 'text-cyan-400' : 'text-fuchsia-400';
  const statusNumber = isEven ? "Even" : "Odd";
  return (
    <section className="flex flex-wrap flex-col justify-center items-center gap-5">
      
      <p className={`${colorNumber} text-center font-bold bg-red-500 px-10 rounded-2xl  shadow-xl border-2 border-amber-400 outline-2 outline-green-400`}>{number}<br/><span>{statusNumber}</span></p>

      <button className="rounded-full px-5 bg-green-500" onClick={() => setNumber(number + 1)}>Tambah</button>

      <button className="rounded-full px-5 bg-red-500" onClick={() => setNumber(number - 1)} disabled={number < 1} >Kurang</button>

      <button onClick={() => setNumber(0)} type="reset" >Reset</button>
    </section>
  );
};

export default Counter;