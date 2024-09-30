import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      postData
    );
    return response.data;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    searchString: "",
    loading: false,
    error: null,
  },
  reducers: {
    searchStringChanged(state, action) {
      state.searchString = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export const { searchStringChanged } = postSlice.actions;

export default postSlice.reducer;
