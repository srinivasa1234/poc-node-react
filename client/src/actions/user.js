import api from "../utils/api";
import { GET_USERS, NO_USERS } from "./types";

// Get users
export const getUsers = () => async (dispatch) => {
  try {
    const res = await api.get("https://jsonplaceholder.typicode.com/users");

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NO_USERS,
    });
  }
};
