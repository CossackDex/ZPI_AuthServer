import { A_GET_USERS, CHANGE_MAIL } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case A_GET_USERS:
      return {
        ...state,
        ...action.payload,
      };
    case CHANGE_MAIL:
      return state
    default:
      return state;
  }
};
