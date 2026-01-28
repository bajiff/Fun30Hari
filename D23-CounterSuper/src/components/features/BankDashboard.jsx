// ? /src/features/BankDashboard.jsx
import { useState } from "react";
import { dispatch } from "../../context/BankContext";
const BankDashboard = () => {
  const [inputSaldo, setInputSaldo] = useState(0);
  const [inputUsername, setInputUsername] = useState("");
  
  const handleGantiUsername = (e) => {
    e.preventDefault();

    dispatch({type: "GANTI_USERNAME", payload: inputUsername});
  }
  
  const handleSetorSaldo = (e) => {
    e.preventDefault();

    dispatch({type: "SETOR", payload: inputSaldo});
  };

  const handleTarikSaldo = (e) => {
    e.preventDefault();

    dispatch({type: "TARIK", payload: inputSaldo});
  };
  return (
    <section className="flex flex-col items-center justify-center">
      {/* Ganti Username */}
      <form onSubmit={handleGantiUsername}>
        <label htmlFor="username">Setor Tunai</label>
        <input type="number" name="username" id="username" value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} />
        <button>Ganti Username</button>
      </form>

      <br />
      {/* Setor Saldo */}
      <form onSubmit={handleSetorSaldo}>
        <label htmlFor="setor">Setor Tunai</label>
        <input type="number" name="setor" id="setor" value={inputSaldo} onChange={(e) => setInputSaldo(parseInt(e.target.value))} />
        <button>Setor</button>
      </form>

      <br />
      {/* Tarik Saldo */}
      <form onSubmit={handleTarikSaldo}>
        <label htmlFor="tarik">Setor Tunai</label>
        <input type="number" name="tarik" id="tarik" value={inputSaldo} onChange={(e) => setInputSaldo(parseInt(e.target.value))} />
        <button>Tarik</button>
      </form>

      <br />
      <button onClick={() => dispatch({type: "HAPUS_HISTORY", history: []})}>Reset History</button>

    </section>
  )
}

export default BankDashboard;