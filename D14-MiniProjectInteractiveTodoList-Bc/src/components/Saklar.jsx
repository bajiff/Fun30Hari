function Saklar({isOn, togglerSwitch}) {
  return (
    <div className="flex flex-col items-center mb-5">
      <button className={`bg-amber-400 px-5 py-3 hover:bg-amber-600 active:bg-amber-800 cursor-pointer`} onClick={togglerSwitch}>Turn {isOn ? "Off" : "On"}</button>
    </div>
  );
};

export default Saklar;