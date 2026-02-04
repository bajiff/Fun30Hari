// ? components/ui/DashboardCounter.jsx
import { useContext, useState } from "react";
import { CounterContext } from "../../context/CounterReducer";

const DashboardCounter = () => {
  const {state,dispatch} = useContext(CounterContext)
  const [inputIncrement, setInputIncrement] = useState(0);
  const [inputDecrement, setInputDecrement] = useState(0);
  const [inputStep, setInputStep] = useState(1);

  const handleIncrement = (e) => {
    e.preventDefault();
    dispatch({type: "INCREMENT"})
    
    setInputIncrement(0);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    dispatch({type: "DECREMENT"})

    setInputDecrement(0);
  };
  
  const handleStep = (e) => {
    e.preventDefault();
    dispatch({type: "SET_STEP", payload: inputStep})

    setInputDecrement(0);
  };

  return (
    <section className="flex flex-col items-center justify-center border gap-3 px-4 py-2 rounded-2xl">
      <section className="flex flex-col items-center">
        <h1>Welcome {state.name}</h1>
        <h1>Count {state.count}</h1>
        <h1>Step {state.step}</h1>
      </section>

      <form className="flex flex-col items-start justify-center mt-2" onSubmit={handleIncrement}>
        <label htmlFor="increment">Increment</label>
        <input className="px-2 py-2 border rounded " type="button" name="increment" id="increment" value={inputIncrement} onChange={(e) => setInputIncrement(parseInt(e.target.value))} />
        <button className="bg-green-500 px-2 py-1 rounded border my-2">Increment</button>
      </form>

      <form className="flex flex-col items-start justify-center mt-2" onSubmit={handleDecrement}>
        <label htmlFor="decrement">Decrement</label>
        <input className="px-2 py-2 border rounded " type="button" name="decrement" id="decrement" value={inputDecrement} onChange={(e) => setInputDecrement(parseInt(e.target.value))} />
        <button className="bg-orange-500 px-2 py-1 rounded border my-2">Decrement</button>
      </form>
      <form className="flex flex-col items-start justify-center mt-2" onSubmit={handleStep}>
        <label htmlFor="setStep">Set Step</label>
        <input className="px-2 py-2 border rounded " type="number" name="setStep" id="setStep" value={inputStep} onChange={(e) => setInputStep(parseInt(e.target.value))} />
        <button className="bg-orange-500 px-2 py-1 rounded border my-2">Set Step</button>
      </form>
      <button className="bg-red-500 px-2 py-1 rounded border my-2" onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </section>
  )
}

export default DashboardCounter;