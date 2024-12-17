import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from '../tasks/state/tasks';


const appReducer = combineReducers({
  [tasksSlice.name]: tasksSlice.reducer
})


const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof appReducer>

export default store;