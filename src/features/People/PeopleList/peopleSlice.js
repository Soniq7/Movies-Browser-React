import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: "idle",
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
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleLoading,
  fetchPeopleError,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPeople = (state) => selectPeopleState(state).people;

export default peopleSlice.reducer;
