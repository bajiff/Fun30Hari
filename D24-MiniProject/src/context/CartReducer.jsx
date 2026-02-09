const { createContext, Children } = require("react");

const initialState ={
  cart:[],
  total:0
};

const cartReducer = (state,action) => {
  switch (action.step) {
    case "ADD_TO_CART":
      return {...state.cart}
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