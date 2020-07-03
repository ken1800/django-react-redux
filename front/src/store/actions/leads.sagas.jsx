import * as actionTypes from "./actionType";
import { put, takeLatest, select, all, call } from "redux-saga/effects";
import {
  getLeadSucced,
  addedLeadSucced,
  deleteLeadSucced,
} from "./leadsActions";
import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { updatedTokenConfig } from "./authActions";

const url = "http://localhost:8000/api/leads/";

export const ReducerSelector = (state) => state.auth;

function* getLeads() {
  try {
    yield console.log("getting leads ......");
    const Auth = yield select(ReducerSelector);
    const res = yield axios.get(url, updatedTokenConfig(Auth.token));
    yield getSucceded(res.data);
  } catch (error) {
    yield put(returnErrors(error.response.data, error.response.status));
  }
}

function* addLead({ payload: { name, email, message, token } }) {
  try {
    const data = { name, email, message };
    const res = yield axios.post(url, data, updatedTokenConfig(token));
    yield leadSuccess(res.data);
    yield put(createMessage({ addedLead: "Lead Added.." }));
  } catch (error) {
    yield put(returnErrors(error.response.data, error.response.status));
  }
}

function* deleteLead({ payload: { id } }) {
  try {
    //   i used the select API to select the existing state of my application
    const Auth = yield select(ReducerSelector);
    yield axios.delete(url + `${id}/`, updatedTokenConfig(Auth.token));
    yield leadDeleteSuccess(id);
    yield put(createMessage({ deleteLead: "Lead Deleted" }));
  } catch (error) {
    yield put(returnErrors(error.response.data, error.response.status));
  }
}

function* leadSuccess(data) {
  yield put(addedLeadSucced(data));
}
function* leadDeleteSuccess(id) {
  yield put(deleteLeadSucced(id));
}
function* getSucceded(data) {
  yield put(getLeadSucced(data));
}
function* addLeadStart() {
  yield takeLatest(actionTypes.ADD_LEAD_START, addLead);
}
function* deleteLeadStart() {
  yield takeLatest(actionTypes.DELETE_LEAD_START, deleteLead);
}
function* getLeadsStart() {
  yield takeLatest(actionTypes.GET_LEADS_START, getLeads);
}

// this is the root saga for this file
export function* rootLeadsSagas() {
  yield all([call(addLeadStart), call(deleteLeadStart), call(getLeadsStart)]);
}
