import { getPopularPeople } from "./getPopularPeople";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleLoading,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { call, takeLatest, put, delay } from "redux-saga/effects";

function* fetchPeopleHandler() {
  try {
    yield put(fetchPeopleLoading());
    yield delay(500);
    const people = yield call(getPopularPeople);
    yield put(fetchPeopleSuccess(people));
  } catch {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
