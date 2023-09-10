import { getPopularPeople } from "./getPopularPeople";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { call, takeLatest, put } from "redux-saga/effects";

function* fetchPeopleHandler() {
  try {
    const people = yield call(getPopularPeople);
    yield put(fetchPeopleSuccess(people));
  } catch {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
