import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice";
import tagSlice from "./slice/tagSlice";

export const store = configureStore({
  reducer: {
    postSlice,
    tagSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
