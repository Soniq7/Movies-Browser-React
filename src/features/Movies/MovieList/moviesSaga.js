import { getPopularMovies } from "./getPopularMovies";
import { fetchMovies, fetchMoviesSuccess } from "./moviesSlice";
import { call, takeLatest, put } from "redux-saga/effects";

function* fetchMoviesHandler() {
  try {
    const movies = yield call(getPopularMovies);
    console.log(movies);
    yield put(fetchMoviesSuccess(movies));
    console.log("1");
  } catch {
    console.log("error");
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
