import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../interfaces/Post";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/articles");
  return data;
});

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface PostState {
  items: Post[];
  status: Status;
}

const initialState: PostState = {
  items: [],
  status: Status.LOADING,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPosts.rejected, state => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export default postSlice.reducer;
