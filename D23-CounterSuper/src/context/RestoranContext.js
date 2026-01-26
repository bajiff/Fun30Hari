import { createContext } from "react";

// ? Inisialisasi data
const initialState = {
  stokTelur:0,
  statusToko:"BUKA"
};

// ? Bikin Logika Bisnis
const restoranReducer = (state,action) {
  switch (action.type) {
    case "BELI_TELUR":
      return {...state, stokTelur : state.stokTelur + 1};
    case "MASAK_TELUR":
      return {...state, stokTelur : state.stokTelur - 1};
    case "TUTUP_TOKO":
      return {...state, statusToko: state.statusToko = "TUTUP"};
    default:
      return state;
  };
};

// ? Create Contextnya atau wadahnya
export const RestoranContext = createContext();



