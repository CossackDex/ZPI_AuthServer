import { A_GET_USER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case A_GET_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
