import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: "idle",
    searchTerm: "",
    page: 1,
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
    updateSearchTerm: (state, {payload: action}) => {
      state.searchTerm = action;
    },
    fetchMovies: () => {},
    nextMoviePage: (state) => {
      state.page = state.page + 1;
    },
    prevMoviePage: (state) => {
      state.page = state.page - 1;
    },
    lastMoviePage: (state) => {
      state.page = 500;
    },
    firstMoviePage: (state) => {
      state.page = 1;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesLoading,
  fetchMoviesError,
  updateSearchTerm,
  nextMoviePage,
  prevMoviePage,
  lastMoviePage,
  firstMoviePage,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMoviePage = (state) => selectMoviesState(state).page;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectSearchTerm = (state) => selectMoviesState(state).searchTerm;

export default moviesSlice.reducer;
