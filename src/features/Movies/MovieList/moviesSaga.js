import { getPopularMovies } from "./getPopularMovies";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchMoviesLoading,
  selectMoviePage,
} from "./moviesSlice";
import { call, takeLatest, put, delay, select } from "redux-saga/effects";

function* fetchMoviesHandler() {
  try {
    const page = yield select(selectMoviePage);
    yield put(fetchMoviesLoading());
    yield delay(500);
    const movies = yield call(getPopularMovies, page);
    yield put(fetchMoviesSuccess(movies));
  } catch {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
