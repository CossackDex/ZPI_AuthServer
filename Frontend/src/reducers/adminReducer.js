import { A_GET_USERS } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
      case A_GET_USERS:
        return {
          ...state,
          username: action.payload.id.username,
          email: action.payload.id.email,
          created_date: action.payload.id.created_date,
          is_banned: action.payload.id.is_banned,
          force_password_change: action.payload.id.force_password_change
        };
      default:
        return state;
    }
  };