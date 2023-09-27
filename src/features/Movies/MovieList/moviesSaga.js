import { getPopularMovies } from "./getPopularMovies";
import { getSearchMoviesResult } from "../../SearchResults/SearchMovies/getSearchMoviesResult";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchMoviesLoading,
  selectMoviesSearchTerm,
  selectMoviePage,
} from "./moviesSlice";
import { call, takeLatest, put, delay, select } from "redux-saga/effects";

function* fetchMoviesHandler() {
  try {
    const searchTerm = yield select(selectMoviesSearchTerm);
    yield put(fetchMoviesLoading());

    let moviesData;
    const page = yield select(selectMoviePage);

    if (searchTerm) {
      yield delay(1500);
      moviesData = yield call(getSearchMoviesResult, searchTerm);
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
