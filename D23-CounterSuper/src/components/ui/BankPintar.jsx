import { useReducer, useState } from "react";
import { bankReducer } from "../../context/BankContext";

const BankPintar = () => {
  const [state, dispatch] = useReducer(bankReducer,0);
  const [inputAngka,setInputAngka] = useState(0);

  return (
    <section>
      <h1>Saldo Sekarang {state}</h1>
      <label htmlFor="inputAngka">Inputkan Angka</label>
      <input type="number" name="inputAngka" id="inputAngka" value={inputAngka} onChange={(e) => setInputAngka(parseInt(e.target.value) || 0)} />
      
      <button onClick={() => dispatch({type: "SETOR", payload:inputAngka})}>Tambah</button>
      
      <button onClick={() => dispatch({type: "TARIK", payload: inputAngka})}>Tarik</button>

      <button onClick={() => dispatch({type: "BUNGA"})}>Bunga</button>

      <button onClick={() => dispatch({type: "RESET"})}>Reset Saldo</button>
    </section>
  )
}

export default BankPintar;