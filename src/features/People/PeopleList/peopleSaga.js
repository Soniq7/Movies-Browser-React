import { getPopularPeople } from "./getPopularPeople";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleLoading,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { selectPeoplePage } from "./peopleSlice";
import { call, takeLatest, put, delay, select } from "redux-saga/effects";

function* fetchPeopleHandler() {
  try {
    const page = yield select(selectPeoplePage);
    yield put(fetchPeopleLoading());
    yield delay(500);
    const people = yield call(getPopularPeople, page);
    yield put(fetchPeopleSuccess(people));
  } catch {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
