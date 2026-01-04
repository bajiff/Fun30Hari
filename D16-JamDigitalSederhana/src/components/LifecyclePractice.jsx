import { useState } from "react";
import {DigitalClock} from "./Index";

const LifecyclePractice = () => {
  const [showClock, setShowClock] = useState(false);
  
  const switchButton = () => {
    setShowClock(prev => !prev);
  };

  return (
    <section className="h-screen flex flex-col gap-4 justify-center items-center">
      {showClock && <DigitalClock/>}
      <button className={`${showClock ? "bg-red-600 hover:bg-red-700 cursor-pointer" : "bg-green-600 hover:bg-green-700 cursor-pointer"} text-white px-3 py-2 rounded shadow`} onClick={switchButton}>{showClock ? "Stop" : "Start"}</button>
    </section>
  );
};

export default LifecyclePractice;