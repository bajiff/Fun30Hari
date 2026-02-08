// ? components/ui/DashboardCounter.jsx
import { useContext, useState } from "react";
import { CounterContext } from "../../context/CounterReducer";

const DashboardCounter = () => {
  const {state,dispatch} = useContext(CounterContext)
  const [inputStep, setInputStep] = useState(1);

  const handleStep = (e) => {
    e.preventDefault();
    dispatch({type: "SET_STEP", payload: parseInt(inputStep)})
    setInputStep(1)
  };

  return (
    <section className="flex flex-col items-center justify-center border gap-3 px-4 py-2 rounded-2xl">
      <section className="flex flex-col items-center">
        <h1>Welcome {state.name}</h1>
        <h1>Count {state.count}</h1>
        <h1>Step {state.step}</h1>
      </section>
      
      <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
      <button onClick={() => dispatch({type:"RESET"})}>Reset</button>
      
      {/* Bagian Step */}
      <form className="flex flex-col gap-3" onSubmit={handleStep}>
        <label htmlFor="step">Step</label>
        <input className="p-2" type="number" name="step" id="step" value={inputStep} onChange={e => setInputStep(e.target.value)} />
        <button className="bg-green-500 rounded">Kirim Step</button>
      </form>
      
      
    </section>
  )
}

export default DashboardCounter;