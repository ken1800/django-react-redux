import * as actionType from "./actionType";
import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./authActions";

const url = "http://localhost:8000/api/leads/";

export const getLeads = () => (dispatch, getState) => {
  axios
    .get(url, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: actionType.GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteLead = (id) => (dispatch, getState) => {
  axios
    .delete(url + `${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: actionType.DELETE_LEAD,
        payload: id,
      });

      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addLead = (lead) => (dispatch, getState) => {
  axios
    .post(url, lead, tokenConfig(getState))
    .then((res) => {
      setTimeout(() => {
        return dispatch({
          type: actionType.ADD_LEAD,
          payload: res.data,
        });
      }, 2000);
      return dispatch(createMessage({ addedLead: "Lead Added.." }));
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
