import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { Tags } from "../../interfaces/Tags";

export const fetchTags = createAsyncThunk("posts/fetchTags", async () => {
  const { data } = await axios.get("/tags");
  return data;
});

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface TagState {
  items: Tags;
  status: Status;
}

const initialState: TagState = {
  items: { tags: [] },
  status: Status.LOADING,
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTags.pending, state => {
      state.status = Status.LOADING;
      state.items = { tags: [] };
    });
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchTags.rejected, state => {
      state.status = Status.ERROR;
      state.items = { tags: [] };
    });
  },
});

export default tagSlice.reducer;
