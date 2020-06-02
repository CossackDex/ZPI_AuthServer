import { A_GET_USERS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case A_GET_USERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
