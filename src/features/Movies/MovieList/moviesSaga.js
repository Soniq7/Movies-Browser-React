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

    let moviesData;
    const page = yield select(selectMoviePage);

    if (searchTerm) {
      yield delay(1500);
      moviesData = yield call(getSeachResult, searchTerm);
    } else {
      yield delay(500);
      moviesData = yield yield call(getPopularMovies, page);
    }

    yield put(fetchMoviesSuccess(moviesData));
  } catch {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
