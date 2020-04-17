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

export const signUp = (formValues) => async (dispatch) => {
  flask.post("/dashboard/signup", formValues);

  dispatch({ type: SIGN_UP, payload: Response.data });
  history.push('/dashboard')
};

//Łączy się z serwerem, ale jeszcze trzeba ustawić zmienne wartości dla 'a'
export const getUser = () => async (dispatch) => {
  var a = {
    auth: {
      username: "qwe",
      password: "qwe",
    },
  };
  const response = await flask.get("/dashboard/user", a);

  dispatch({ type: GET_USER, payload: response.data });
  console.log(response);
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
