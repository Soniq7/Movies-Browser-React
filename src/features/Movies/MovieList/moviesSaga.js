import { getPopularMovies } from "./getPopularMovies";
import { getSearchMoviesResult } from "../../Navigation/Search/getSearchMovies";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchMoviesLoading,
  selectMoviesSearchTerm,
  selectMoviePage,
  setMaxMoviePages,
} from "./moviesSlice";
import { call, takeLatest, put, delay, select } from "redux-saga/effects";

function* fetchMoviesHandler() {
  const page = yield select(selectMoviePage);
  const searchTerm = yield select(selectMoviesSearchTerm);
  try {
    yield put(fetchMoviesLoading());
    let moviesData;
    if (searchTerm) {
      yield delay(1000);
      moviesData = yield call(getSearchMoviesResult, searchTerm, page);
      yield put(setMaxMoviePages(moviesData.total_pages));
    } else {
      yield delay(500);
      moviesData = yield call(getPopularMovies, page);
      yield put(setMaxMoviePages(500));
    }

    yield put(fetchMoviesSuccess(moviesData));
  } catch {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
