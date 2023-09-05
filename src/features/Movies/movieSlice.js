import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {},
  reducers: {
    fetchMovies: () => {},
  },
});

export const { fetchMovies } = movieSlice.actions;

const selectMovies = (state) => state.movie;

export default movieSlice.reducer;
