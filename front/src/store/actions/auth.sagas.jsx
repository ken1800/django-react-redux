import { put, all, call, takeLatest, select } from "redux-saga/effects";
import * as actionType from "./actionType";
import {
  loadUserFail,
  loadUserSucceed,
  updatedTokenConfig,
  loginSucceed,
  loginFail,
} from "./authActions";

import { ReducerSelector } from "./leads.sagas";
import { returnErrors } from "./messages";
import axios from "axios";

function* loadUser() {
  try {
    const token = yield select(ReducerSelector);
    const tkn = token.token;
    const res = yield axios.get(
      "http://localhost:8000/api/auth/user",
      updatedTokenConfig(tkn)
    );
    yield loadUserSuccess(res);
  } catch (err) {
    yield call(returnErrors(err.response.data, err.response.status));
    yield put(loadUserFail());
  }
}

function* LogIn({ payload: { username, password } }) {
  try {
    //headers

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    // Request Body
    const body = JSON.stringify({
      username,
      password,
    });
    const res = yield axios.post(
      "http://localhost:8000/api/auth/login",
      body,
      config
    );
    // yield console.log(res.data);
    yield loginSuccess(res);
  } catch (err) {
    yield put(returnErrors(err.response.data, err.response.status));
    yield put(loginFail());
  }
}

function* loadUserSuccess(user) {
  yield put(loadUserSucceed(user));
}
function* loginSuccess(res) {
  yield put(loginSucceed(res));
}
function* test() {
  yield console.log("hello hello");
}
export function* loadUserStart() {
  yield takeLatest(actionType.LOAD_USER_START, loadUser);
}
export function* loginStarted() {
  yield takeLatest(actionType.LOGIN_STARTING, LogIn);
}

export function* rootAuthSaga() {
  yield all([call(loginStarted), call(loadUserStart)]);
}
