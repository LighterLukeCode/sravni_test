import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { Comment } from "../../interfaces/Comment";
import { Comments } from "../../interfaces/Comments";

export const fetchComments = createAsyncThunk("comments/fetchComments", async (slug: string) => {
  const { data } = await axios.get(`/articles/${slug}/comments`);
  return data;
});

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface CommentState {
  items: Comment[];
  status: Status;
}

const initialState: CommentState = {
  items: [],
  status: Status.LOADING,
};

const commentsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchComments.pending, state => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchComments.rejected, state => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export default commentsSlice.reducer;
