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
  A_GET_USER,
  A_GET_USERS,
  A_GET_SERVICES,
  A_GET_SERVICE,
} from "./types";

export const signIn = ({ username, password }) => async (dispatch) => {
  const a = { auth: { username: username, password: password } };
  let response = null;
  let i = 0;
  let e = 0;
  while (!response) {
    response = await flask.get("/dashboard/user", a).catch((error) => {
      e = error.response.request.response;
    });
    i += 1;
    if (i > 4) {
      break;
    }
  }
  if (response) {
    const p = { ...response.data, password: password };
    dispatch({ type: SIGN_IN, payload: p });
    if (response.data.role) {
      history.push("/dashboard/admin/users");
    } else {
      history.push("/dashboard/user");
    }
  } else {
    alert(e);
  }
};

export const signOut = () => {
  history.push("/dashboard/login");
  return {
    type: SIGN_OUT,
  };
};

export const signUp = (formValues) => async (dispatch) => {
  const f = { ...formValues };
  let i = 0;
  let e = 0;
  let response0 = 0;
  while (!response0) {
    response0 = await flask.post("/dashboard/signup", f).catch((error) => {
      if (error.request.response.message) {
        e = error.request.response.message;
      } else if (error.request.response[0] == "<") {
        e = JSON.parse(
          error.request.response[(0, error.request.response.length)]
        ).message;
      } else {
        e = JSON.parse(error.request.response).message;
      }
    });
    i += 1;
    if (i > 4) {
      break;
    }
  }
  const a = {
    auth: { username: formValues.username, password: formValues.password },
  };
  if (response0) {
    const response = await flask.get("/dashboard/user", a);
    if (response) {
      const p = { ...response.data, password: formValues.password };
      dispatch({ type: SIGN_UP, payload: p });
      if (response.data.role) {
        history.push("/dashboard/admin/users");
      } else {
        history.push("/dashboard/user");
      }
    }
  } else {
    alert(e);
  }
};

export const getUser = ({ username, password }) => async (dispatch) => {
  const a = { auth: { username: username, password: password } };
  const response = await flask.get("/dashboard/user", a);
  dispatch({ type: GET_USER, payload: response.data });
};

export const changePass = (newpass, a) => async (dispatch) => {
  const npass = { new_password: newpass };
  await flask.put("/dashboard/user/change_password", npass, a);
  dispatch({ type: CHANGE_PASS });
  history.push("/dashboard/login");
};

export const changeMail = (newmail, a) => async (dispatch) => {
  const nmail = { new_email: newmail };
  await flask.put("/dashboard/user/change_email", nmail, a);
  const response = await flask.get("/dashboard/user", a);
  dispatch({ type: CHANGE_MAIL, payload: response.data });
  history.push("/dashboard/login");
};

export const deleteMe = (currentUser, currentPass) => async (dispatch) => {
  const a = { auth: { username: currentUser, password: currentPass } };
  await flask.get("/dashboard/user/self_delete", a);
  history.push("/dashboard/register");
  dispatch({ type: DELETE_ME });
};

export const aGetUser = (a, user) => async (dispatch) => {
  const response = await flask.get("/dashboard/admin", a);
  const list = response.data.user;
  const { id } = user;
  let thisUser = null;
  list.forEach((e) => {
    if (e.id == id) {
      thisUser = e;
    }
  });
  dispatch({ type: A_GET_USER, payload: thisUser });
};

export const aGetUsers = (a) => async (dispatch) => {
  const response = await flask.get("/dashboard/admin", a);
  dispatch({ type: A_GET_USERS, payload: response.data });
};

export const aDeleteUser = (a, user) => async (dispatch) => {
  await flask.get("/dashboard/admin/user/" + user + "/delete_account", a);
  const response = await flask.get("/dashboard/admin", a);
  dispatch({ type: A_GET_USERS, payload: response.data });
};

export const aBanUser = (a, user) => async (dispatch) => {
  await flask.get("/dashboard/admin/user/" + user + "/ban_user", a);
  const response = await flask.get("/dashboard/admin", a);
  dispatch({ type: A_GET_USERS, payload: response.data });
};

export const aUnbanUser = (a, user) => async (dispatch) => {
  await flask.get("/dashboard/admin/user/" + user + "/unban_user", a);
  const response = await flask.get("/dashboard/admin", a);
  dispatch({ type: A_GET_USERS, payload: response.data });
};

export const aSanction = (a, user) => async (dispatch) => {
  await flask.get("/dashboard/admin/user/" + user + "/give_privileges", a);
  const response = await flask.get("/dashboard/admin", a);
  dispatch({ type: A_GET_USERS, payload: response.data });
};

export const aForcePass = (a, user) => async (dispatch) => {
  await flask.get(
    "/dashboard/admin/user/" + user + "/force_password_change",
    a
  );
  const response = await flask.get("/dashboard/admin", a);
  dispatch({ type: A_GET_USERS, payload: response.data });
  if (response) {
    alert("Request has been sent");
  }
};

export const aChangeMail = (newmail, a, username) => async (dispatch) => {
  const nmail = { new_email: newmail };
  await flask.post(
    "/dashboard/admin/user/" + username + "/change_email",
    nmail,
    a
  );
  const response = await flask.get("/dashboard/admin", a);
  dispatch({ type: A_GET_USERS, payload: response.data });
};

export const aGetServices = (a) => async (dispatch) => {
  const response = await flask.get("/dashboard/services", a);
  dispatch({ type: A_GET_SERVICES, payload: response.data });
};

export const aPostService = (formValues, a) => async (dispatch) => {
  const nserv = {
    connection_ip: formValues.ipaddress,
    service_name: formValues.servicename,
  };
  const response = await flask.post("/dashboard/services", nserv, a);
  if (response) {
    history.push("/dashboard/admin/services");
  } else {
    alert(response.data.message);
  }
};

export const aDeleteService = (a, service) => async (dispatch) => {
  const sname = service.service_name;
  const response = await flask.delete("/dashboard/services/" + sname, a);
  if (response) {
    const response2 = await flask.get("/dashboard/services", a);
    dispatch({ type: A_GET_SERVICES, payload: response2.data });
  } else {
    alert(response.data.message);
  }
};

export const aGetService = (a, service_name) => async (dispatch) => {
  const response = await flask.get("/dashboard/services/" + service_name, a);
  dispatch({ type: A_GET_SERVICE, payload: response.data });
  history.push("/dashboard/admin/services/edit/" + service_name);
};

export const aEditService = (a, formValues, currentname) => async (
  dispatch
) => {
  const nserv = {
    connection_ip: formValues.newip,
    service_name: formValues.newsname,
  };
  const response = await flask.put(
    "/dashboard/services/" + currentname,
    nserv,
    a
  );
  if (!response) {
    alert(response.data.message);
  }
};
