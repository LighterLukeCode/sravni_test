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
  items: Comments;
  status: Status;
}

const initialState: CommentState = {
  items: { comments: [] },
  status: Status.LOADING,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchComments.pending, state => {
      state.status = Status.LOADING;
      state.items = { comments: [] };
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchComments.rejected, state => {
      state.status = Status.ERROR;
      state.items = { comments: [] };
    });
  },
});

export default commentsSlice.reducer;
