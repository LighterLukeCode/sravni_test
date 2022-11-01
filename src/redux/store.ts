import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slice/postsSlice";
import tagSlice from "./slice/tagSlice";
import postSlice from "./slice/postSlice";
import commentsSlice from "./slice/commentsSlice";

export const store = configureStore({
  reducer: {
    postsSlice,
    tagSlice,
    postSlice,
    commentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
