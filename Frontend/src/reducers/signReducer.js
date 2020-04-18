import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions/types";

const INITIAL_STATE = {
  role: -1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        role: action.payload.role,
        username: action.payload.username,
        mail: action.payload.mail,
        created_date: action.payload.created_date,
        superuser: action.payload.superuser,
      };

    case SIGN_IN:
      return {
        ...state,
        role: action.payload.role,
        username: action.payload.username,
        mail: action.payload.mail,
        created_date: action.payload.created_date,
        superuser: action.payload.superuser,
      };
    case SIGN_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
