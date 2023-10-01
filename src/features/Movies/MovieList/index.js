import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectLoading,
  selectMoviesSearchTerm,
} from "./moviesSlice";
import { selectGenres } from "../../Genres/genresSlice";
import { useEffect } from "react";
import Success from "./Success";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";

const MovieList = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectMoviesSearchTerm);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, searchTerm]);

  const movies = useSelector(selectMovies);
  const state = useSelector(selectLoading);
  const genres = useSelector(selectGenres);
  const { results } = movies;

  switch (state) {
    case "loading":
      return (
        <Loading
          header={searchTerm ? `Search results for “${searchTerm}”` : null}
        />
      );
    case "success":
      return (
        <Success
          movies={results}
          genreList={genres}
          searchTerm={searchTerm}
          header={
            searchTerm
              ? `Search results for "${searchTerm}" (${movies.total_results})`
              : "Popular movies"
          }
        />
      );
    case "error":
      return <Error />;
    default:
      return null;
  }
};

export default MovieList;
