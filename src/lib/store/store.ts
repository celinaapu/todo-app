import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "../tasks/state/tasks";
import { notificationSlice } from "../notifications/notificationSlice";

const appReducer = combineReducers({
  [tasksSlice.name]: tasksSlice.reducer,
  [notificationSlice.name]: notificationSlice.reducer,
});

const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof appReducer>;

export default store;
