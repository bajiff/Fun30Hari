// ? src/context/BankContext.js
import { createContext, useReducer } from "react";

const initialState = {
  username:"Baji",
  saldo:0,
  history:[]
};

const bankReducer = (state,action) => {
  switch (action.type){
    case "SETOR":
      return {...state, saldo:state.saldo + action.payload,history:[...state.history,`SETOR SALDO Rp. ${action.payload}`]};
    case "TARIK":
      if (state.saldo < action.payload) return state;
      return {...state, saldo: state.saldo - action.payload, history: [...state.history,`TARIK SALDO Rp. ${action.payload}`]};
    case "GANTI_USERNAME":
      return {...state, username: action.payload};
    case "HAPUS_HISTORY":
      return {...state, history: []};
    default:
      return state;
  };
};

 const BankContext = createContext();

export const BankProvider = ({children}) => {
  const [state, dispatch] = useReducer(bankReducer, initialState);
  

  return (
  <BankContext.Provider value={{state, dispatch}}>
    {children}
  </BankContext.Provider>
  )
};

