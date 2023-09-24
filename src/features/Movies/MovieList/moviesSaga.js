import { getPopularMovies } from "./getPopularMovies";
import { getSeachResult } from "../../SearchResults/SearchMovies/getSearchResult";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchMoviesLoading,
  selectSearchTerm,
  selectMoviePage,
} from "./moviesSlice";
import { call, takeLatest, put, delay, select } from "redux-saga/effects";

function* fetchMoviesHandler() {
  try {
    const searchTerm = yield select(selectSearchTerm);
    yield put(fetchMoviesLoading());
    yield delay(500);

    const moviesData = searchTerm
      ? yield call(getSeachResult, searchTerm)
      : yield call(getPopularMovies);

    const page = yield select(selectMoviePage);
    yield put(fetchMoviesLoading());
    yield delay(500);
    const movies = yield call(getPopularMovies, page);
    yield put(fetchMoviesSuccess(moviesData, movies));
  } catch {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
