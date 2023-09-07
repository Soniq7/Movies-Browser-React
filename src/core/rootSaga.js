import { moviesSaga } from "../features/Movies/MovieList/moviesSaga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([moviesSaga()]);
}
