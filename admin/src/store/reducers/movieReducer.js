import { MOVIE_FETCH_BY_ID_SUCCESS, MOVIE_FETCH_REQUEST, MOVIE_FETCH_SUCCESS } from "../actions/actiontype";

const initialState = [
  {
    loading: false,
    movies: [],
    movie: null,
  },
];

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };

    case MOVIE_FETCH_BY_ID_SUCCESS:
      return {
        ...state,
        movie: action.payload,
      };

    default:
      return state;
  }
}

export default movieReducer;
