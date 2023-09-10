import { getPopularMovies } from "./getPopularMovies";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchMoviesLoading,
} from "./moviesSlice";
import { call, takeLatest, put, delay } from "redux-saga/effects";

function* fetchMoviesHandler() {
  try {
    yield put(fetchMoviesLoading());
    yield delay(500);
    const movies = yield call(getPopularMovies);
    yield put(fetchMoviesSuccess(movies));
  } catch {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
