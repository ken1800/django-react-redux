import * as actionType from "./actionType";
import { returnErrors } from "./messages";

import axios from "axios";

// LEGACY CODE USING REDUX THUNK

// export const loadUser = () => (dispatch, getState) => {
//   //user loading
//   dispatch({ type: actionType.USER_LOADING });

//   axios
//     .get("http://localhost:8000/api/auth/user", tokenConfig(getState))
//     .then((res) => {
//       dispatch({
//         type: actionType.LOAD_USER_SUCCEED,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: actionType.AUTH_ERROR,
//       });
//     });
// };

// USING REDUX SAGA
export const loadUserStart = () => ({
  type: actionType.LOAD_USER_START,
});

export const loadUserSucceed = (user) => ({
  type: actionType.LOAD_USER_SUCCEED,
  payload: user,
});

export const loadUserFail = () => ({
  type: actionType.LOAD_USER_FAIL,
});

//LOGIN THE USER
// export const login = (username, password) => (dispatch) => {
//   //headers
//   const config = {
//     headers: {
//       "Content-type": "application/json",
//     },
//   };
//   // Request Body
//   const body = JSON.stringify({
//     username,
//     password,
//   });

//   axios
//     .post("http://localhost:8000/api/auth/login", body, config)
//     .then((res) => {
//       dispatch({
//         type: actionType.LOGIN_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       // dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: actionType.LOGIN_FAIL,
//       });
//     });
// };

export const loginStarting = (user) => ({
  type: actionType.LOGIN_STARTING,
  payload: user,
});

export const loginSucceed = (res) => ({
  type: actionType.LOGIN_SUCCEED,
  payload: res.data,
});

export const loginFail = () => ({
  type: actionType.LOAD_USER_FAIL,
});
//REGISTER THE USER
export const register = ({ username, password, email }) => (dispatch) => {
  //headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  // Request Body
  const body = JSON.stringify({
    username,
    email,
    password,
  });

  axios
    .post("http://localhost:8000/api/auth/register", body, config)
    .then((res) => {
      dispatch({
        type: actionType.REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionType.REGISTER_FAIL,
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post("http://localhost:8000/api/auth/logout", null, tokenConfig(getState))
    .then((res) => {
      //   dispatch({
      //     type: "CLEAR_LEADS",
      //   });
      dispatch({
        type: actionType.LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};

export const updatedTokenConfig = (token) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
