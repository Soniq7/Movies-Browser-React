import { getPopularPeople } from "./getPopularPeople";
import { getSearchPeopleResult } from "../../SearchResults/SearchPeople/getSearchPeopleReasults";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleLoading,
  fetchPeopleSuccess,
  selectPeopleSearchTerm,
  selectPeoplePage,
  setMaxPeoplePages,
} from "./peopleSlice";
import { call, takeLatest, put, delay, select } from "redux-saga/effects";

function* fetchPeopleHandler() {
  const page = yield select(selectPeoplePage);
  const searchTerm = yield select(selectPeopleSearchTerm);
  try {
    yield put(fetchPeopleLoading());

    let peopleData;

    if (searchTerm) {
      yield delay(1000);
      peopleData = yield call(getSearchPeopleResult, searchTerm, page);
      yield put(setMaxPeoplePages(peopleData.total_pages));
    } else {
      yield delay(500);
      peopleData = yield call(getPopularPeople, page);
      yield put(setMaxPeoplePages(500));
    }

    yield put(fetchPeopleSuccess(peopleData));
  } catch {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
