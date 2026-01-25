import { useReducer } from 'react'
import {RestoranContext} from "../../context";

const RestoranProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducerFunction, initialState);
  return (
  <RestoranContext.Provider>
    
  </RestoranContext.Provider>
  )
}

export default RestoranProvider;