import {
  fetchSearchResults,
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchMoviesLoading,
} from "./moviesSlice";
import { call, takeLatest, put, delay } from "redux-saga/effects";
import { getSearchResults } from "./getSearchReasult";

function* fetchSeachResultsHandler() {
  try {
    yield put(fetchMoviesLoading());
    const data = yield call(getSearchResults);
    yield put(fetchMoviesSuccess(movies));
  } catch {
    yield put(fetchMoviesError());
  }
}

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
  

export function* SearchResultsSaga() {
  yield takeLatest(fetchSearchResults.type, fetchSeachResultsHandler);
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
