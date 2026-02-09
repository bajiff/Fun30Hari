// // ? Ini RestoranContext.js
// import { createContext,  useReducer } from "react";

// const initialState = {
//   stokTelur: 0,
//   statusToko:"BUKA",
// };

// const restoranReducer = (state, action) => {
//   switch (action.type) {
//     case "TAMBAH_TELUR":
//       return {...state, stokTelur: state.stokTelur + 1};
//     case "MASAK_TELUR":
//       if (state.stokTelur === 0) return state;
//       return {...state, stokTelur: state.stokTelur - 1};
//     default:
//       return state;
//   };
// };

// export const RestoranContext = createContext();

// export const RestoranProvider = ({children}) => {
//   const [state, dispatch] = useReducer(restoranReducer,initialState);
//   return (
//     <RestoranContext.Provider value={{state,dispatch}}>
//       {children}
//     </RestoranContext.Provider>
//   );
// };