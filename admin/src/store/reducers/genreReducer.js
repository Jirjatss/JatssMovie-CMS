import { GENRE_FETCH_BY_ID_SUCCESS, GENRE_FETCH_REQUEST, GENRE_FETCH_SUCCESS } from "../actions/actiontype";

const initialState = {
  loading: false,
  genres: [],
  genre: null,
};

function genreReducer(state = initialState, action) {
  switch (action.type) {
    case GENRE_FETCH_SUCCESS:
      return {
        ...state,
        genres: action.payload,
        loading: false,
      };
    case GENRE_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GENRE_FETCH_BY_ID_SUCCESS:
      return {
        ...state,
        genre: action.payload,
      };

    default:
      return state;
  }
}

export default genreReducer;
