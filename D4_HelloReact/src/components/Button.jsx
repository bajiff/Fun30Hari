import { useState } from "react";

const Button = () => {
  const [name,setName] = useState("Heker");

  return (
    <div>
      <h1>Halo Dunia :D</h1>
      <p>My name is Baji <br />i'm a {name}</p>
      <button onClick={() => setName("Gacor")}>Change Role</button>
    </div>
  )
};
export default Button;