import { createSlice } from "@reduxjs/toolkit";
import fetchAllPosts from "../creators/postCreator";

const initialState = {
  posts: [],
  isLoading: false,
  isError: "",
};

const postsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.isError = "";
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.isError = "";
      state.isLoading = true;
      state.posts = [];
    });
    builder.addCase(fetchAllPosts.rejected, (state) => {
      state.isError = "Something has gone wrong";
      state.isLoading = false;
      state.posts = [];
    });
  },
});

const postsReducer = postsSlice.reducer;

export default postsReducer;
