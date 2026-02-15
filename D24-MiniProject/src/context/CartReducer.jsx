import { createContext } from "react";

const initialState ={
  cart:[],
  total:0
};

const cartReducer = (state,action) => {
  switch (action.step) {
    case "ADD_TO_CART":
      return {...state.cart}
    case "REMOVE_FROM_CART":
      return {// Menerima ID hapus barang dari array pakay array .filter 
        };
    case "DECREASE_QTY": 
      return {
        // Menerima Payload ID
        // Kurangi QTY
        // Logic: Jika qty sisa 1 dan dikurang, maka HAPUS barangnya.

      }


  }
}

export const cartContext = createContext();

const CartProvider = ({children}) => {
  return (
    <cartContext.Provider>
      {children}
    </cartContext.Provider>
  )
}