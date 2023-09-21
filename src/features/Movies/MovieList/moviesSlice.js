import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: "idle",
    searchTerm: "",
  },
  reducers: {
    fetchMoviesLoading: (state) => {
      state.loading = "loading";
    },
    fetchMoviesError: (state) => {
      state.loading = "error";
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.loading = "success";
      state.movies = movies;
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    fetchMovies: () => {},
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesLoading,
  fetchMoviesError,
  updateSearchTerm,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectSearchTerm = (state) => selectMoviesState(state).searchTerm;

export default moviesSlice.reducer;
