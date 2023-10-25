import { FETCH_CASTS_SUCCESS } from "../actions/actiontype";

const initialState = {
  casts: [],
};

const castReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CASTS_SUCCESS:
      return {
        ...state,
        casts: action.payload,
      };

    default:
      return state;
  }
};

export default castReducer;
