import { GET_USERS, NO_USERS } from "../actions/types";

const initialState = {
  users: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case NO_USERS:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
}
