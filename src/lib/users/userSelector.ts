import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const allUsers = createSelector((state: RootState) => state.users);
