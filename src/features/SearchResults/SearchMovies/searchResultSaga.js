import {
  fetchSearchResults,
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchMoviesLoading,
} from "./moviesSlice";
import { call, takeLatest, put, delay, select } from "redux-saga/effects";
import { getSearchMoviesResults } from "./getSearchMoviesResult";
import { selectSearchTerm } from "../../Movies/MovieList/moviesSlice";

function* fetchSeachResultsHandler() {
  try {
    yield put(fetchMoviesLoading());
    const query = yield select(selectSearchTerm);
    const apiKey = "8b43bbaa1ee9b2785648e68ff2415313";
    const data = yield call(getSearchMoviesResults, query, apiKey);
    const movies = data.results;
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
