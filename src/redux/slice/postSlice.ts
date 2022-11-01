import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { Article } from "../../interfaces/Article";

export const fetchPost = createAsyncThunk("post/fetchPost", async (slug: string) => {
  const { data } = await axios.get(`/articles/${slug}`);
  return data;
});

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface PostState {
  item: Article;
  status: Status;
}

const initialState: PostState = {
  item: { article: null },
  status: Status.LOADING,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPost.pending, state => {
      state.status = Status.LOADING;
      state.item = { article: null };
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.item = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPost.rejected, state => {
      state.status = Status.ERROR;
      state.item = { article: null };
    });
  },
});

export default postSlice.reducer;
