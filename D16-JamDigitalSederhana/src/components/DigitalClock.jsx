import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [date, setDate] = useState(new Date);

  useEffect(() => {
    const timerID = setInterval(() => {
      console.log("Berjalan");
      setDate(new Date());
    }, 1000);
    

    return () => {
      clearInterval(timerID);
      console.log("Timer dimatikan");
    };
  },[]);
  

  return (
    <section>
      {date.toLocaleTimeString()}
    </section>
  )
}

export default DigitalClock;