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
      <button onClick={switchButton}>{showClock ? "Stop" : "Start"}</button>
    </section>
  );
};

export default LifecyclePractice;