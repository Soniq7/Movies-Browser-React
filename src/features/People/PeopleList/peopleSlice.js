import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: "idle",
    searchTerm: "",
    maxPages: 500,
    page: 1,
  },
  reducers: {
    fetchPeopleLoading: (state) => {
      state.loading = "loading";
    },
    fetchPeopleError: (state) => {
      state.loading = "error";
    },
    fetchPeopleSuccess: (state, { payload: people }) => {
      state.loading = "success";
      state.people = people;
    },
    updatePeopleSearchTerm: (state, { payload: action }) => {
      state.searchTerm = action;
    },
    fetchPeople: () => {},
    nextPeoplePage: (state) => {
      state.page = state.page + 1;
    },
    prevPeoplePage: (state) => {
      state.page = state.page - 1;
    },
    lastPeoplePage: (state) => {
      state.page = state.maxPages;
    },
    firstPeoplePage: (state) => {
      state.page = 1;
    },
    setMaxPeoplePages: (state, { payload: maxPages }) => {
      state.maxPages = maxPages;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleLoading,
  fetchPeopleError,
  updatePeopleSearchTerm,
  nextPeoplePage,
  prevPeoplePage,
  lastPeoplePage,
  firstPeoplePage,
  setMaxPeoplePages,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPeople = (state) => selectPeopleState(state).people;
export const selectPeoplePage = (state) => selectPeopleState(state).page;
export const selectMaxPeoplePages = (state) =>
  selectPeopleState(state).maxPages;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectPeopleSearchTerm = (state) =>
  selectPeopleState(state).searchTerm;

export default peopleSlice.reducer;
