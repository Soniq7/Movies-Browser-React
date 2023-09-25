import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectLoading,
  selectSearchTerm,
} from "./moviesSlice";
import { selectGenres } from "../../Genres/genresSlice";
import { useEffect } from "react";
import Success from "./Success";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";

const MovieList = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, searchTerm]);

  const movies = useSelector(selectMovies);
  const state = useSelector(selectLoading);
  const genres = useSelector(selectGenres);
  const { results } = movies;
  console.log(results);

  switch (state) {
    case "loading":
      return <Loading />;
    case "success":
      return <Success movies={results} genreList={genres} />;
    case "error":
      return <Error />;
    default:
      return null;
  }
};

export default MovieList;
