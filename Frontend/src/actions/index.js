import axios from "axios";
import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  GET_USER,
  CHANGE_PASS,
  CHANGE_MAIL,
  A_GET_USERS,
  A_GET_USER,
  A_CHANGE_PASS,
  A_FORCE_PASS,
  A_CHANGE_MAIL,
  A_FORCE_MAIL,
  S_POWERS,
  S_POWER
} from "./types";

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const signUp = formValues => async dispatch => {
  axios.post("http://127.0.0.1:5000/dashboard/signup", formValues);

  dispatch({ type: SIGN_UP, payload: Response.data });
};

// export const getUser = () => async dispatch => {
//   const a = {username: 'qwe'}
//   const response = await axios.get("http://127.0.0.1:5000/dashboard/user", a, {
//     auth: {
//       Username: 'qwe',
//       Password: 'qwe'
//     }
//   });

//   dispatch({ type: GET_USER, payload: response.data })
//   console.log(response.data)
// }

// export const changePass = () => {

// }

// export const changeMail = () => {

// }

// export const aGetUsers = () => async dispatch => {
//   const response = await axios.post("http://127.0.0.1:5000/dashboard/admin/get_all_users")

//   dispatch({ type: A_GET_USERS, payload: response.data });
// }
// }

// export const aGetUser = () => {

// }

// export const aChangePass = () => {

// }

// export const aForcePass = () => {

// }

// export const aChangeMail = () => {

// }

// export const aForceMail = () => {

// }

// export const sPower = () => {

// }

// export const sPower = () => {

// }