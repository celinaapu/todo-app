import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const selectUsersState = (state: RootState) => state.users;

export const allUsers = createSelector(
  [selectUsersState],
  (usersState) => usersState
);
