import React from 'react'

function Saklar({isOn, togglerSwitch}) {
  return (
    <button className={`bg-amber-400 px-5 py-3 hover:bg-amber-600 pointer-events-auto`} onClick={togglerSwitch}>Turn {isOn ? "Off" : "On"}</button>
  )
}

export default Saklar