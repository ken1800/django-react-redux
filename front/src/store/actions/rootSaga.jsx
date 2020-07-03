import { all, put, call } from "redux-saga/effects";
import { rootLeadsSagas } from "./leads.sagas";
import { rootAuthSaga } from "./auth.sagas";

export function* rootSaga() {
  yield all([call(rootLeadsSagas), call(rootAuthSaga)]);
}
