import * as actionType from "../actions/actionType";

const initialState = {
  leads: [],
};

const leadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    case actionType.ADD_LEAD:
      return {
        ...state,
        leads: [action.payload, ...state.leads],
      };
    case actionType.DELETE_LEAD:
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
