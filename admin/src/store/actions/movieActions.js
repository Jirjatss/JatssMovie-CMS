import { MOVIE_FETCH_SUCCESS, MOVIE_FETCH_BY_ID_SUCCESS, MOVIE_FETCH_REQUEST } from "./actiontype";
import Swal from "sweetalert2";
const baseUrl = "https://api.jirjatss.online";

const swal = (icon, title) => {
  Swal.fire({
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1000,
  });
};

export const movieFetchRequest = () => {
  return { type: MOVIE_FETCH_REQUEST };
};

export const movieFetchSuccess = (payload) => {
  return { type: MOVIE_FETCH_SUCCESS, payload };
};

export const movieFetchByIdSuccess = (payload) => {
  return { type: MOVIE_FETCH_BY_ID_SUCCESS, payload };
};

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(movieFetchRequest());
    try {
      const response = await fetch(baseUrl + "/movies", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const data = await response.json();
      if (!response.ok) throw data;
      setTimeout(() => {
        dispatch(movieFetchSuccess(data));
      }, 1000);
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const fetchMovieById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/movies/" + id, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const data = await response.json();
      if (!response.ok) throw data;
      setTimeout(() => {
        dispatch(movieFetchByIdSuccess(data));
      }, 1000);
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const deleteMovie = (id) => {
  return async (dispatch, getState) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Delete",
      });

      if (result.isConfirmed) {
        const response = await fetch(baseUrl + "/movies/" + id, {
          method: "delete",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
        // getState({ type: "movieFetchSuccess", payload: data });
        dispatch(fetchMovies());
        swal("success", "Success Delete Movie");
      }
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const addMovie = (inputMovie) => {
  return async (dispatch) => {
    try {
      console.log(inputMovie.casts);
      const response = await fetch(baseUrl + "/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(inputMovie),
      });
      const data = await response.json();
      if (!response.ok) throw data;
      dispatch(fetchMovies());
      swal("success", "Success Add Movie");
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const editMovie = (id, inputMovie) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/movies/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(inputMovie),
      });
      const data = await response.json();
      if (!response.ok) throw data;
      dispatch(fetchMovies());
      swal("success", "Success edit Movie");
    } catch (error) {
      swal("error", error.message);
    }
  };
};
