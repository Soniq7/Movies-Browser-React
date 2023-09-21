import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectLoading, selectSearchTerm } from "./moviesSlice";
import { useEffect } from "react";
import Success from "./Success";
import Loading from "../../Loading";
import Error from "../../Error";

const MovieList = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, searchTerm]);
  
  const movies = useSelector(selectMovies);
  const { results } = movies;
  const state = useSelector(selectLoading);

  switch (state) {
    case "loading":
      return <Loading />;
    case "success":
      return <Success results={results} />;
    case "error":
      return <Error />;
    default:
      return null;
  }
};

export default MovieList;
