import { createSlice } from "@reduxjs/toolkit";
import { Priority } from "../tasks/state/tasks";

type Notification = {
  id: string;
  title: string;
  priority: Priority;
  image: string;
  time: string;
  message: string;
};

interface NotificationState {
  notifications: Notification[];
  total: number;
}

const notificationinitialState: NotificationState = {
  notifications: [],
  total: 0,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState: notificationinitialState,
  reducers: {
    createNotification: (state, action) => {
      state.notifications.push({
        id: new Date().toISOString(),
        message: action.payload.message,
        title: action.payload.title,
        priority: action.payload.priority,
        image: action.payload.image,
        time: action.payload.time,
      });
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload.id
      );
    },
    getTotalNotifications: (state) => {
      state.total = state.notifications.length;
    },
  },
});

export const { createNotification, removeNotification } =
  notificationSlice.actions;
