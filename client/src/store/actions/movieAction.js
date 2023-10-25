import { FETCH_MOVIE_BY_SLUG_REQUEST, FETCH_MOVIE_BY_SLUG_SUCCESS, FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS } from "./actiontype";

const baseURL = "https://api.jirjatss.online";

export const fetchMovieRequest = () => {
  return { type: FETCH_MOVIE_REQUEST };
};

export const fetchMovieSuccess = (payload) => {
  return { type: FETCH_MOVIE_SUCCESS, payload };
};

export const fetchMovieBySlugRequest = () => {
  return { type: FETCH_MOVIE_BY_SLUG_REQUEST };
};
export const fetchMovieBySlugSuccess = (payload) => {
  return { type: FETCH_MOVIE_BY_SLUG_SUCCESS, payload };
};

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(fetchMovieRequest());
    try {
      const response = await fetch(baseURL + "/pub/movies");
      const data = await response.json();
      if (!response.ok) throw data;
      setTimeout(() => {
        dispatch(fetchMovieSuccess(data));
      }, 1000);
    } catch (error) {
      throw error;
    }
  };
};

export const fetchMovieByslug = (slug) => {
  return async (dispatch) => {
    dispatch(fetchMovieBySlugRequest());
    try {
      const response = await fetch(baseURL + `/pub/movies/${slug}`);
      const data = await response.json();
      if (!response.ok) throw data;
      setTimeout(() => {
        dispatch(fetchMovieBySlugSuccess(data));
      }, 1000);
    } catch (error) {
      throw error;
    }
  };
};
