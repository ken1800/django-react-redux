import * as actionType from "../actions/actionType";

const initialState = {
  msg: {},
  status: null,
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };

    default:
      return state;
  }
};

export default error;
