import React, { useState } from 'react'

const Button = () => {
  const [role, setRole] = useState("Pemula React Dev");
  return (
    <section>
      <p>{role}</p>
      <button onClick={() => setRole("React Dev")}>
        Change Role
      </button>
    </section>
  )
}

export default Button