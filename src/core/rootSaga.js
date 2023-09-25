import { moviesSaga } from "../features/Movies/MovieList/moviesSaga";
import { peopleSaga } from "../features/People/PeopleList/peopleSaga";
import { genresSaga } from "../features/Genres/genresSaga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([moviesSaga(), peopleSaga(), genresSaga()]);
}
