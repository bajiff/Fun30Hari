import { useState } from "react";
import {ChatRoom} from './Index'

const LifecyclePractice = () => {
  const [showChat, setShowChat] = useState(true)

  const chatButton = () => {
    setShowChat(prev => !prev)
  };
  
  const sectionStyle = `flex flex-col gap-10 items-center justify-center`

  return (
    <section className={sectionStyle}>
    {showChat && <ChatRoom showChat={showChat} />}
      <button onClick={chatButton}>{showChat ? "Tutup" : "Buka"}</button>
    </section>
  )
}

export default LifecyclePractice;