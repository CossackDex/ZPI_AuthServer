import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  GET_USER,
  CHANGE_PASS,
  CHANGE_MAIL,
  DELETE_ME,
} from "../actions/types";

const INITIAL_STATE = {
  role: -1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        id: action.payload.id,
        role: action.payload.role,
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
        created_date: action.payload.created_date,
        superuser: action.payload.superuser,
      };

    case SIGN_IN:
      return {
        ...state,
        id: action.payload.id,
        role: action.payload.role,
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
        created_date: action.payload.created_date,
        superuser: action.payload.superuser,
      };
    case SIGN_OUT:
      return INITIAL_STATE;

    case GET_USER:
      return state;

    case CHANGE_PASS:
      return INITIAL_STATE;

    case CHANGE_MAIL:
      return {
        ...state,
        mail: action.payload.mail,
      };

    case DELETE_ME:
      return INITIAL_STATE;

    default:
      return state;
  }
};
