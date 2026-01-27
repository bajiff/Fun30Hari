export const bankReducer = (state,action) => {
  switch (action.type) {
    case "SETOR":
      return state + action.payload;
    case "TARIK":
      if (state < action.payload) {
        alert("Saldonya Kurang Bos")
      return state;
      }
      return state - action.payload;
    case "BUNGA":
      return state + (state * 10/100);
    case "RESET":
      return 0;
    default:
      return state;
  };
};