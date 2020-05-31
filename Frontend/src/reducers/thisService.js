import { A_GET_SERVICE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case A_GET_SERVICE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
