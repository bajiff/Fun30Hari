import { useReducer } from 'react'
import { bosReducer } from '../../context/BosContext';

const DompetBos = () => {
  const [dompet, teriak] = useReducer(bosReducer,0);
  return (
    <section>
      <h1>Saldo Bos {dompet}</h1>
      <button onClick={() => teriak({type:"TAMBAH_SALDO"})}>Tambah Saldo</button>

      <button onClick={() => teriak({type:"KURANG_SALDO"})}>Kurang Saldo</button>
      
      <button onClick={() => teriak({type:"RESET_SALDO"})}>Rampok Dompet Bos</button>
    </section>
  );
};

export default DompetBos;