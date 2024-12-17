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
  tasks: [
    {
      title: "Walk the dogs",
      description: "Walking the dog in the day time",
      date: new Date(),
      id: "1",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newsweek.com%2Fhow-long-walking-dog-based-breed-vets-1802937&psig=AOvVaw1uBHvxYEhhNnqabT9tMV5j&ust=1734198923466000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCz_8eopYoDFQAAAAAdAAAAABAE",
      priority: Priority.low,
      status: Status.inProgress,
    },
  ],
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
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (tasks) => tasks.id !== action.payload.id
      );
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
