// ? context/CounterReducer.jsx
import { createContext, useReducer } from "react";

const initialState = {
  name: "Baji",
  count: 0,
  step: 1,
};

export const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state.count + state.step > 100) return state;
    return {...state, count: state.count + state.step};
    case "DECREMENT":
      if (state.count - state.step < 0 ) return state;
    return {...state, count: state.count - state.step};
    case "CHANGE_NAME":
      return {...state, name: action.payload};
    case "RESET":
      return {...state,name: "", count: 0, step: 0};
    case "SET_STEP":
      return {...state, count: state.count ^ state.step};
  };
};

export const CounterContext = createContext();

export const CounterProvider = ({children}) => {
  const [state,dispatch] = useReducer(counterReducer,initialState);
  
  return (
    <CounterContext.Provider value={{state,dispatch}}>
      {children}
    </CounterContext.Provider>
  )
}