import rootReducer from "../reducers";
import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { rootSaga } from "../actions/rootSaga";
import { loadUserStart, loginStarted } from "../actions/auth.sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(loadUserStart);
sagaMiddleware.run(loginStarted);

export default store;
