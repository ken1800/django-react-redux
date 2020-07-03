import * as actionType from "../actions/actionType";

const initialState = {
  leads: [],
};

const leadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_LEADS_SUCCEED:
      return {
        ...state,
        leads: action.payload,
      };
    case actionType.ADD_LEAD_SUCCED:
      return {
        ...state,
        leads: [action.payload, ...state.leads],
      };
    case actionType.DELETE_LEAD_SUCCEED:
      const updatedArray = state.leads.filter(
        (lead) => lead.id !== action.payload
      );
      return {
        ...state,
        leads: updatedArray,
      };
    default:
      return state;
  }
};

export default leadsReducer;
