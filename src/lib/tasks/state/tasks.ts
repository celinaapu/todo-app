import { createSlice } from "@reduxjs/toolkit";

export enum Priority {
  high = "High",
  moderate = "Moderate",
  low = "Low",
}

export enum Status {
  inProgress = "In Progress",
  notStarted = "Not Started",
  completed = "Completed",
}

type Task = {
  title: string;
  description: string;
  priority?: Priority;
  status: Status;
  image: string;
  date?: Date;
  id: string;
};

interface TasksState {
  tasks: Task[];
  total: number;
  inProgress: number;
  notStarted: number;
  completed: number;
}

const taskInitialState: TasksState = {
  tasks: [],
  total: 0,
  inProgress: 0,
  notStarted: 0,
  completed: 0,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: taskInitialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [
        ...state.tasks,
        { ...action.payload, id: state.tasks.length.toString() },
      ];
    },
    deleteTask: (state, action) => {
      const newTasks = state.tasks.filter((task) => {
        if (task.id === action.payload) {
          return false;
        } else {
          return true;
        }
      });
      console.log("New Tasks ====>", newTasks);
      state.tasks = newTasks;
    },
    getTotal: (state) => {
      state.total = state.tasks.length;
    },
    getInProgress: (state) => {
      state.inProgress = state.tasks.filter(
        (tasks) => tasks.status === Status.inProgress
      ).length;
    },
    getNotStatrted: (state) => {
      state.notStarted = state.tasks.filter(
        (tasks) => tasks.status === Status.notStarted
      ).length;
    },
    getCompleted: (state) => {
      state.completed = state.tasks.filter(
        (tasks) => tasks.status === Status.completed
      ).length;
    },
  },
});

export const {
  addTask,
  deleteTask,
  getTotal,
  getCompleted,
  getInProgress,
  getNotStatrted,
} = tasksSlice.actions;
