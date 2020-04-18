import flask from "../apis/flask";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  GET_USER,
  // CHANGE_PASS,
  // CHANGE_MAIL,
  // A_GET_USERS,
  // A_GET_USER,
  // A_CHANGE_PASS,
  // A_FORCE_PASS,
  // A_CHANGE_MAIL,
  // A_FORCE_MAIL,
  // S_POWERS,
  // S_POWER,
} from "./types";


export const signIn = ({username, password}) => async (dispatch) => {
  const a = {auth: {username: username, password: password}};
  const response = await flask.get("/dashboard/user", a);

  if (response) {
    dispatch({ type: SIGN_IN, payload: response.data });
    history.push('/dashboard') //Później warto dodać info o błędnej nazwie lub haśle
  }
};

export const signOut = () => {
  history.push('/login')
  return {
    type: SIGN_OUT,
  };
};

export const signUp = (formValues) => async (dispatch) => {
  const f = { ...formValues, role: 0}
  await flask.post("/dashboard/signup", f);
  const a = {auth: {username: formValues.username, password: formValues.password}};
  const response = await flask.get("/dashboard/user", a);
  console.log(response.data)
  if (response) {
  dispatch({ type: SIGN_UP, payload: response.data });
  history.push('/dashboard')
  }
};

//Nie wiem jak to wykorzystać do reużywalności kodu
export const getUser = ({username, password}) => async (dispatch) => {
  const a = {auth: {username: username, password: password}};
  const response = await flask.get("/dashboard/user", a);
  return response
};

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
