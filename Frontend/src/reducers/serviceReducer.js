import { A_GET_SERVICES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case A_GET_SERVICES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
