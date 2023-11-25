import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      // state IS NOT THE BIG OBJECT IN THE STORE
      // IT IS THE PIECE OF STATE MANAGED BY THIS REDUCER
      state.push(action.payload); // using immer library to update state
    },
    removeMovie(state, action) {
      // action.payload === string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
