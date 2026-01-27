export const bankReducer = (state,action) => {
  switch (action.type) {
    case "SETOR":
      return state + action.payload;
    case "TARIK":
      if (state === 0) return state;
      return state - action.payload;
    case "RESET":
      return 0;
    default:
      return state;
  };
};