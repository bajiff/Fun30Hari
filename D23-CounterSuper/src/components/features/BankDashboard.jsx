// ? /src/features/BankDashboard.jsx
import { useContext, useState } from "react";
import { BankContext } from "../../context/BankContext";
const BankDashboard = () => {
  const {state,dispatch} = useContext(BankContext); 
  const [inputSaldo, setInputSaldo] = useState(0);
  const [inputTarikSaldo, setInputTarikSaldo] = useState(0);
  const [inputUsername, setInputUsername] = useState("");
  
  const handleGantiUsername = (e) => {
    e.preventDefault();

    dispatch({type: "GANTI_USERNAME", payload: inputUsername});
    setInputUsername("");
  }
  
  const handleSetorSaldo = (e) => {
    e.preventDefault();

    dispatch({type: "SETOR", payload: inputSaldo});
    setInputSaldo(0);
  };

  const handleTarikSaldo = (e) => {
    e.preventDefault();

    dispatch({type: "TARIK", payload: inputTarikSaldo});
    setInputTarikSaldo(0);
  };
  return (
    <section className="flex flex-col items-center justify-center border rounded px-3">
      <section className="flex flex-col items-start justify-center ">
        <h1>Selamat datang {state.username}</h1>
        <h1>Saldo Anda {state.saldo}</h1>
      </section>
      {/* Ganti Username */}
      <form className="flex flex-col gap-2" onSubmit={handleGantiUsername}>
        <label htmlFor="username">Ganti Username</label>
        <input className="border rounded px-2" type="text" name="username" id="username" value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} required autoFocus/>
        <button className="border rounded px-2 bg-yellow-400">Ganti Username</button>
      </form>

      <br />
      {/* Setor Saldo */}
      <form className="flex flex-col gap-2" onSubmit={handleSetorSaldo}>
        <label htmlFor="setor">Setor Tunai</label>
        <input className="border rounded px-2" type="number" name="setor" id="setor" value={inputSaldo} onChange={(e) => setInputSaldo(parseInt(e.target.value))} />
        <button className="border rounded px-2 bg-yellow-400">Setor</button>
      </form>

      <br />
      {/* Tarik Saldo */}
      <form className="flex flex-col gap-2" onSubmit={handleTarikSaldo}>
        <label htmlFor="tarik">Setor Tunai</label>
        <input className="border rounded px-2" type="number" name="tarik" id="tarik" value={inputTarikSaldo} onChange={(e) => setInputTarikSaldo(parseInt(e.target.value))} />
        <button className="border rounded px-2 bg-yellow-400">Tarik</button>
      </form>

      <div className="flex flex-col items-center mt-4">
        <h1>History</h1>
        <ul className="flex flex-col items-start justify-center">
          {state.history.map((history, index)=> (
            <li key={index}>{history}</li>
          ))}
        </ul>
          {state.history.length > 0 && (<button onClick={() => dispatch({type: "HAPUS_HISTORY"})}>Hapus History</button>)}
      </div>
    </section>
  )
}

export default BankDashboard;