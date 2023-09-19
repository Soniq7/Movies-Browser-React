import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: "idle",
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
    fetchPeople: () => {},
    nextPeoplePage: (state) => {
      state.page = state.page + 1;
    },
    prevPeoplePage: (state) => {
      state.page = state.page - 1;
    },
    lastPeoplePage: (state) => {
      state.page = 500;
    },
    firstPeoplePage: (state) => {
      state.page = 1;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleLoading,
  fetchPeopleError,
  nextPeoplePage,
  prevPeoplePage,
  lastPeoplePage,
  firstPeoplePage,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPeople = (state) => selectPeopleState(state).people;
export const selectPeoplePage = (state) => selectPeopleState(state).page;
export const selectLoading = (state) => selectPeopleState(state).loading;

export default peopleSlice.reducer;
