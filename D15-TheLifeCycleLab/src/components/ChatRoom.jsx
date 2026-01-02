import { useEffect, useState } from "react";

const ChatRoom = () => {

  const [pesan,setPesan] = useState("");
  const [count, setCount] = useState(0);
  const [car] = useState("");

  useEffect(() => {
      document.title = pesan;
  },[pesan]);
  
  useEffect(() => {
    console.log("Connected");
    return () => {
      console.log("❌ Disconnected")
    }
  },[]);
  
  
  
  const inputStyle = `mt-10 border p-1 rounded`


  return (
    <>
    <h1 className="mt-10">{car}</h1>
    <input className={inputStyle} type="text" name="message" id="message" placeholder="Type something" required autoFocus value={pesan} onChange={e => setPesan(e.target.value)} />

      <button onClick={() => setPesan("")}>Reset Input</button>

      <p>My Girlfriends {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Tambah</button>

      <button onClick={() => setCount(prev => prev - 1)}>Kurang</button>

      <button onClick={() => setCount(0)}>Reset Number</button>
    </>
  )
}

export default ChatRoom;