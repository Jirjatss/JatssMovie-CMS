import { FETCH_CASTS_SUCCESS } from "./actiontype";
const baseUrl = "https://api.jirjatss.online";
export const fetchCastsSuccess = (payload) => {
  return { type: FETCH_CASTS_SUCCESS, payload };
};

export const fetchCasts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/pub/casts");
      const data = await response.json();
      if (!response.ok) throw data;
      dispatch(fetchCastsSuccess(data));
    } catch (error) {
      throw error;
    }
  };
};
