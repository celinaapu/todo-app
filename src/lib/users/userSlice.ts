import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  isLoggedIn: boolean;
};

interface UserState {
  User: User | null;
}

const usersInitialState: UserState = {
  User: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.User = action.payload;
    },
    logout: (state) => {
      state.User = null;
    },
  },
});
export const { login, logout } = usersSlice.actions;
export default usersSlice;
