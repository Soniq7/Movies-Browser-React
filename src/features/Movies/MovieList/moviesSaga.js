import { getPopularMovies } from "./getPopularMovies";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
} from "./moviesSlice";
import { call, takeLatest, put } from "redux-saga/effects";

function* fetchMoviesHandler() {
  try {
    const movies = yield call(getPopularMovies);
    yield put(fetchMoviesSuccess(movies));
  } catch {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
