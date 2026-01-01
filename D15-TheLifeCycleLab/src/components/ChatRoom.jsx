import { useEffect, useState } from "react";

const ChatRoom = () => {

  const [pesan,setPesan] = useState("");
  const [count, setCount] = useState(0);
  const [car,setCar] = useState("");

  useEffect(() => {
    console.log("📡 Connected to Server")
    console.log(document.title = pesan);
    return () => {
      console.log("❌ Disconnected from Server");
    }
  },[pesan]);
  
  
  const inputStyle = `mt-10 border p-1 rounded`

  return (
    <>
    <h1 className="mt-10">{car}</h1>
    <input className={inputStyle} type="text" name="message" id="message" placeholder="Type something" required autoFocus onChange={e => setPesan(e.target.value)} />
      <p>My Girlfriends {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Tambah</button>
      <button onClick={() => setCount(prev => prev - 1)}>Kurang</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default ChatRoom;