import * as actionType from "../actions/actionType";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.LOAD_USER_SUCCEED:
      // console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.data,
      };

    case actionType.LOGIN_SUCCEED:
    case actionType.REGISTER_SUCCESS:
      console.log(action.payload.token);
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case actionType.LOAD_USER_FAIL:
    case actionType.LOGIN_FAIL:
    case actionType.LOGOUT_SUCCESS:
    case actionType.REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default error;
