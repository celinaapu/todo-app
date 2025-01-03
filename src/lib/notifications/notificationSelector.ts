import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const getAllNotifications = createSelector(
  (state: RootState) => state.notification,
  (appNotifications) => appNotifications.notifications
);
