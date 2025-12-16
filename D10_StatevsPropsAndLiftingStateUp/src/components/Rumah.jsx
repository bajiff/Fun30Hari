import { useState } from "react"
import Saklar from "./Saklar";

const Rumah = () => {
  const [isOn,setIsOn] = useState(true);
  return (
  <>
    <Lampu on={isOn} />
    <Saklar/>
  </>
  );
};

export default Rumah;