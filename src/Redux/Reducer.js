import { BUY_BOOK } from "./../Constants/ActionType";

const initialState = {
  NumberOfBooks: 20
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        NumberOfBooks: state.initialState - 1
      };
    default:
      return state;
  }
};
export default Reducer;
