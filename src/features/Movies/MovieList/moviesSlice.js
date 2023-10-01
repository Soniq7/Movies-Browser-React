import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: "idle",
    searchTerm: "",
    maxPages: 500,
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
    updateMoviesSearchTerm: (state, { payload: action }) => {
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
      state.page = state.maxPages;
    },
    firstMoviePage: (state) => {
      state.page = 1;
    },
    setMaxMoviePages: (state, { payload: maxPages }) => {
      if (state.maxPages !== maxPages) {
        state.page = 1;
      }
      state.maxPages = maxPages;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesLoading,
  fetchMoviesError,
  updateMoviesSearchTerm,
  nextMoviePage,
  prevMoviePage,
  lastMoviePage,
  firstMoviePage,
  setMaxMoviePages,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMoviePage = (state) => selectMoviesState(state).page;
export const selectMaxMoviePages = (state) => selectMoviesState(state).maxPages;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectMoviesSearchTerm = (state) =>
  selectMoviesState(state).searchTerm;

export default moviesSlice.reducer;
