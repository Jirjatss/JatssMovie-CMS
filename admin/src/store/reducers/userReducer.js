import { USER_FETCH_SUCCESS } from "../actions/actiontype";

const initialState = {
  loading: false,
  users: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_SUCCESS:
      return {
        ...state,

        users: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
