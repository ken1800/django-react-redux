import * as actionType from "./actionType";
// import axios from "axios";
// import { tokenConfig } from "./authActions";

// const url = "http://localhost:8000/api/leads/";

// getting the leads
export const getLeadStart = () => ({
  type: actionType.GET_LEADS_START,
});

export const getLeadError = (error) => ({
  type: actionType.GET_ERRORS,
  payload: error,
});

export const getLeadSucced = (data) => ({
  type: actionType.GET_LEADS_SUCCEED,
  payload: data,
});
// adding the leads
export const addLeadStart = (leads) => ({
  type: actionType.ADD_LEAD_START,
  payload: leads,
});

export const addLeadError = (error) => ({
  type: actionType.ADD_LEAD_FAIL,
  payload: error,
});

export const addedLeadSucced = (data) => ({
  type: actionType.ADD_LEAD_SUCCED,
  payload: data,
});

// deleting our Leads
export const deleteLeadStart = (data) => ({
  type: actionType.DELETE_LEAD_START,
  payload: data,
});

export const deleteLeadError = (error) => ({
  type: actionType.DELETE_LEAD_FAIL,
  payload: error,
});

export const deleteLeadSucced = (id) => ({
  type: actionType.DELETE_LEAD_SUCCEED,
  payload: id,
});

// THIS IS THE LEGACY CODE USING REDUX-THUNK LIBRARY

// export const getLeads = () => (dispatch, getState) => {
//   axios
//     .get(url, tokenConfig(getState))
//     .then((res) => {
//       dispatch({
//         type: actionType.GET_LEADS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// export const deleteLead = (id) => (dispatch, getState) => {
//   axios
//     .delete(url + `${id}/`, tokenConfig(getState))
//     .then((res) => {
//       dispatch({
//         type: actionType.DELETE_LEAD,
//         payload: id,
//       });

//       dispatch(createMessage({ deleteLead: "Lead Deleted" }));
//     })
//     .catch((err) =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

// export const addLead = (lead) => (dispatch, getState) => {
//   axios
//     .post(url, lead, tokenConfig(getState))
//     .then((res) => {
//       setTimeout(() => {
//         return dispatch({
//           type: actionType.ADD_LEAD,
//           payload: res.data,
//         });
//       }, 2000);
//       return dispatch(createMessage({ addedLead: "Lead Added.." }));
//     })
//     .catch((err) =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

// adding Lead
