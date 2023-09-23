import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectLoading } from "./moviesSlice";
import { fetchGenres, selectGenres } from "../Genres/genresSlice";
import { useEffect } from "react";
import Success from "./Success";
import Loading from "../../Loading";
import Error from "../../Error";

const MovieList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const state = useSelector(selectLoading);
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const { results } = movies;

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
