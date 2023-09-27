import { getPopularPeople } from "./getPopularPeople";
import { getSearchPeopleResult } from "../../SearchResults/SearchPeople/getSearchPeopleReasults";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleLoading,
  fetchPeopleSuccess,
  selectPeopleSearchTerm,
  selectPeoplePage,
} from "./peopleSlice";
import { call, takeLatest, put, delay, select } from "redux-saga/effects";

function* fetchPeopleHandler() {
  try {
    const searchTerm = yield select(selectPeopleSearchTerm);
    yield put(fetchPeopleLoading());

    let peopleData;
    const page = yield select(selectPeoplePage);

    if (searchTerm) {
      yield delay(1000);
      peopleData = yield call(getSearchPeopleResult, searchTerm);
    } else {
      yield delay(500);
      peopleData = yield yield call(getPopularPeople, page);
    }

    yield put(fetchPeopleSuccess(peopleData));
  } catch {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
