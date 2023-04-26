const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_CURRENT_USER":
      return action.payload;
    // case "UPDATE_QUESTIONS":
    //   return {...state, result:{...state.result, Q_rem:action.Q_rem}}
    default:
      return state;
  }
};

export default currentUserReducer;
