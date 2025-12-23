import { useState } from "react";

const Button = () => {
  const [name,setName] = useState("Heker");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Halo Dunia :D</h1>
      <p>My name is Baji <br />i'm a {name}</p>
      <button onClick={() => setName("Gacor")}>Change Role</button>
      <button onClick={() => setName("Heker")}>Reset</button>
      <p>Nomor Sekarang {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)} disabled={count < 1}>Kurang</button>
      <button onClick={() => setCount(0)}>Reset</button>

    </div>
  )
};
export default Button;