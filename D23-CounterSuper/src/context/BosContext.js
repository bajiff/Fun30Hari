export const bosReducer = (state,action) => {
  switch (action.type) {
    case "TAMBAH_SALDO":
      return state + 100000;
    case "KURANG_SALDO":
      if (state === 0 ) return state;
      return state - 1000;
    case "RESET_SALDO":
      return state = 0;
    default:
      return state;
  };
};
