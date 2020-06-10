import * as actionType from "../actions/actionType";

const initialState = {};

const message = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_MESSAGE:
      return (state = action.payload);

    default:
      return state;
  }
};

export default message;
