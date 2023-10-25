import { FETCH_MOVIE_BY_SLUG_REQUEST, FETCH_MOVIE_BY_SLUG_SUCCESS, FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS } from "../actions/actiontype";

const initialState = {
  movies: [],
  movie: null,
  loading: false,
  error: "",
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };

    case FETCH_MOVIE_BY_SLUG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_MOVIE_BY_SLUG_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
      };

    default:
      return state;
  }
}

export default movieReducer;
