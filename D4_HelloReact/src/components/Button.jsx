import { useState } from "react"

const Button = () => {
  const [name, setName] = useState("Heker");
  return (
    <>
      <h1>Hello dek saya adalah seorang ${name}</h1>
      <button onClick={() => setName("Programmer")}>Change Role</button>
    </>
  )
}

export default Button;