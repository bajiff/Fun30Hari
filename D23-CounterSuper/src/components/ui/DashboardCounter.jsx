// ? components/ui/DashboardCounter.jsx
import { useContext, useState } from "react";
import { CounterContext } from "../../context/CounterReducer";

const DashboardCounter = () => {
  const {state,dispatch} = useContext(CounterContext)
  const [inputStep, setInputStep] = useState(1);

  const handleStep = (e) => {
    e.preventDefault();
    dispatch({type: "SET_STEP", payload: inputStep})
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
      
      
    </section>
  )
}

export default DashboardCounter;