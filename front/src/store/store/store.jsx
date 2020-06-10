import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
