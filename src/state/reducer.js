import { FETCH_FLIGHTS } from "./actions";
const initialState = {
  flights: [],
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCH_FLIGHTS: {
      return {
        ...state,
        flights: action.flights,
      };
    }
    default:
      return state;
  }
};
