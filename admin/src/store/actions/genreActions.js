import { GENRE_FETCH_BY_ID_SUCCESS, GENRE_FETCH_REQUEST, GENRE_FETCH_SUCCESS } from "./actiontype";
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
export const genreFetchSuccess = (payload) => {
  return { type: GENRE_FETCH_SUCCESS, payload };
};

export const genreFetchRequest = () => {
  return { type: GENRE_FETCH_REQUEST };
};

export const genreFetchByIdSuccess = (payload) => {
  return { type: GENRE_FETCH_BY_ID_SUCCESS, payload };
};

export const fetchGenre = () => {
  return async (dispatch) => {
    dispatch(genreFetchRequest());
    try {
      const response = await fetch(baseUrl + "/genres", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      setTimeout(() => {
        dispatch(genreFetchSuccess(data));
      }, 1000);
    } catch (error) {
      swal("error", error.message);
    }
  };
};
export const fetchGenreById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/genres/" + id, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      dispatch(genreFetchByIdSuccess(data));
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const deleteGenre = (id) => {
  return async (dispatch) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Deleting a genre will also delete movies of the same genre!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Delete",
      });

      if (result.isConfirmed) {
        const response = await fetch(baseUrl + "/genres/" + id, {
          method: "delete",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
        dispatch(fetchGenre());
        swal("success", "Success Delete Genre");
      }
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const addGenre = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/genres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw data;
      dispatch(fetchGenre());
      swal("success", "Success Add Genre");
    } catch (error) {
      console.log(error);
      swal("error", error.message);
    }
  };
};

export const editGenre = (id, payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/genres/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw data;
      dispatch(fetchGenre());
      swal("success", "Success Edit Genre");
    } catch (error) {
      swal("error", error.message);
    }
  };
};
