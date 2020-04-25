import flask from "../apis/flask";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  GET_USER,
  CHANGE_PASS,
  CHANGE_MAIL,
  DELETE_ME,
  // A_GET_USERS,
  // A_GET_USER,
  // A_CHANGE_PASS,
  // A_FORCE_PASS,
  // A_CHANGE_MAIL,
  // A_FORCE_MAIL,
  // A_DELETE_USER,
  // S_POWERS,
  // S_POWER,
} from "./types";

export const signIn = ({ username, password }) => async dispatch => {
  const a = { auth: { username: username, password: password } };
  const response = await flask.get("/dashboard/user", a);
  console.log(response.data)
  if (response) {
    const p = {...response.data, password: password }
    dispatch({ type: SIGN_IN, payload: p })
    if (response.data.role) {history.push("/dashboard/admin/users");}
    else {history.push("/dashboard/user");} //Później warto dodać info o błędnej nazwie lub haśle
  }
};

export const signOut = () => {
  history.push("/dashboard/login");
  return {
    type: SIGN_OUT,
  };
};

export const signUp = formValues => async dispatch => {
  const f = { ...formValues, role: 0 };
  await flask.post("/dashboard/signup", f);
  const a = {
    auth: { username: formValues.username, password: formValues.password },
  };
  const response = await flask.get("/dashboard/user", a);
  if (response) {
    const p = {...response.data, password: formValues.password }
    dispatch({ type: SIGN_UP, payload: p });
    if (response.data.role) {history.push("/dashboard/admin/users");}
    else {history.push("/dashboard/user");}

  }
};

export const getUser = ({ username, password }) => async dispatch => {
  const a = { auth: { username: username, password: password } };
  const response = await flask.get("/dashboard/user", a);
  dispatch({ type: GET_USER, payload: response.data });
};

export const changePass = (newpass, a) => async dispatch => {
  const npass = { new_password: newpass };
  await flask.put("/dashboard/user/change_password", npass, a);
  dispatch({ type: CHANGE_PASS });
  history.push("/dashboard/login");
};

export const changeMail = (newmail, a) => async dispatch => {
  const nmail = { new_email: newmail };
  await flask.put("/dashboard/user/change_email", nmail, a);
  const response = await flask.get("/dashboard/user", a);
  dispatch({ type: CHANGE_MAIL, payload: response.data });
  history.push("/dashboard/login");
};

export const deleteMe = (currentUser, currentPass) => async dispatch => {
  const a = { auth: { username: currentUser, password: currentPass } };
  await flask.get("/dashboard/user/self_delete", a);
  history.push("/dashboard/register");
  dispatch({ type: DELETE_ME });
};

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
