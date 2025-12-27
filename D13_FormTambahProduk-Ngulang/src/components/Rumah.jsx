import { useState } from "react";
import {Saklar,Lampu} from "./Index";

const Rumah = () => {
  const [isOn, setIsOn] = useState(true);
  const togglerSwitch = () => setIsOn(prev => !prev);
  return (
  <>
    <Lampu isOn={isOn}/>
    <Saklar isOn={isOn} togglerSwitch={togglerSwitch}/>
  </>
  );
};

export default Rumah;