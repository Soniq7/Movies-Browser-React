import {
    fetchSearchResults,
    fetchPeople,
    fetchPeopleError,
    fetchPeopleSuccess,
    fetchPeopleLoading,
  } from "../../People/PeopleList/peopleSlice";
  import { call, takeLatest, put, delay, select } from "redux-saga/effects";
  import { getSearchPeopleResults } from "./getSearchPeopleReasults";
  import { selectSearchTerm } from "../../People/PeopleList/peopleSlice";
  
  function* fetchSeachResultsHandler() {
    try {
      yield put(fetchPeopleLoading());
      const query = yield select(selectSearchTerm);
      const apiKey = "8b43bbaa1ee9b2785648e68ff2415313";
      const data = yield call(getSearchPeopleResults, query, apiKey);
      const people = data.results;
      yield put(fetchPeopleSuccess(people));
    } catch {
      yield put(fetchPeopleError());
    }
  }
  
  function* fetchPeopleHandler() {
      try {
        yield put(fetchPeopleLoading());
        yield delay(500);
        const movies = yield call(getPopularPeople);
        yield put(fetchPeopleSuccess(people));
      } catch {
        yield put(fetchPeopleError());
      }
    }
    
  export function* SearchResultsSaga() {
    yield takeLatest(fetchSearchResults.type, fetchSeachResultsHandler);
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
  }