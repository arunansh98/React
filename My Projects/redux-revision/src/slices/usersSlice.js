import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers",async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  return data.users;
});

const usersSlice = createSlice({
  name: "users",
  initialState: apiState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        console.log("api call pending !");
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      });
  },
});

export default usersSlice.reducer;