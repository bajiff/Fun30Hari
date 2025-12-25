
import { useState } from "react";
import {Lampu, Saklar} from "./Index";

const Rumah = () => {
  const [isOn, setIsOn] = useState(true);
  const togglerButton = () => {
    setIsOn(prev => !prev);
  }

  return (
  <>
    <Lampu isOn={isOn}/>
    <Saklar isOn={isOn} togglerButton={togglerButton} />
  </>
  )
}

export default Rumah;