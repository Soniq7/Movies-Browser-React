import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
    loading: "idle",
    page: 1,
  },
  reducers: {
    fetchGenresLoading: (state) => {
      state.loading = "loading";
    },
    fetchGenresError: (state) => {
      state.loading = "error";
    },
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.loading = "success";
      state.genres = genres;
    },
    fetchGenres: () => {},
  },
});

export const {
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresLoading,
  fetchGenresError,
} = genresSlice.actions;

const selectGenresState = (state) => state.genres;

export const selectGenres = (state) => selectGenresState(state).genres;
export const selectGenresLoading = (state) => selectGenresState(state).loading;

export default genresSlice.reducer;
