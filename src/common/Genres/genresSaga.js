import { getGenres } from "./getGenres";
import {
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
  fetchGenresLoading,
} from "./genresSlice";
import { call, takeLatest, put, delay } from "redux-saga/effects";

function* fetchGenresHandler() {
  try {
    yield put(fetchGenresLoading());
    yield delay(500);
    const genres = yield call(getGenres);
    yield put(fetchGenresSuccess(genres));
  } catch {
    yield put(fetchGenresError());
  }
}

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
