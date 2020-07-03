import { createSelector } from "reselect";

const getAuth = (state) => state.auth;

export const getToken = createSelector([getAuth], (auth) => {
  if (auth.token) {
    return auth.token;
  } else return null;
});
