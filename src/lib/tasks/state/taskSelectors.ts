import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export const getAllTasks = createSelector(
  (state: RootState) => state.tasks,
  (appTasks) => appTasks.tasks
);

export const getTotalTasks = createSelector(
  (state: RootState) => state.tasks,
  (appTasks) => appTasks.total
);

export const allUsers = createSelector(
  (state: RootState) => state.user,
  (appUsers) => appUsers.total
);
