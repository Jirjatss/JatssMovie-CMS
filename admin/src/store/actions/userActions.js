import { USER_FETCH_SUCCESS } from "./actiontype";
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

export const userFetchSuccess = (payload) => {
  return { type: USER_FETCH_SUCCESS, payload };
};

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/users");
      const data = await response.json();

      if (!response.ok) throw data;

      dispatch(userFetchSuccess(data));
    } catch (error) {
      throw error;
    }
  };
};

export const doLogin = (input) => {
  return async () => {
    try {
      const response = await fetch(baseUrl + "/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      if (!response.ok) throw data;
      console.log(data);
      localStorage.access_token = data.access_token;
      localStorage.name = data.name;
      swal("success", "Success Login");
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const doLogout = () => {
  return async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Logout",
      });
      if (result.isConfirmed) {
        localStorage.clear();
        swal("success", "Success Logout");
      }
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const registerNewAdmin = (payload) => {
  return async () => {
    try {
      const response = await fetch(baseUrl + "/registerAdmin", {
        method: "post",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw data;
      swal("success", "Success Add new Admin");
    } catch (error) {
      swal("error", error.message);
    }
  };
};
