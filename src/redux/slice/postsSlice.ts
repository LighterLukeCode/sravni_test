import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { Articles } from "../../interfaces/Articles";

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
  items: Articles;
  status: Status;
}

const initialState: PostState = {
  items: { articles: [], articlesCount: 0 },
  status: Status.LOADING,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.status = Status.LOADING;
      state.items = { articles: [], articlesCount: 0 };
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPosts.rejected, state => {
      state.status = Status.ERROR;
      state.items = { articles: [], articlesCount: 0 };
    });
  },
});

export default postsSlice.reducer;
