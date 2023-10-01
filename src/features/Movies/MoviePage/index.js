import { useEffect, useState } from "react";
import Success from "./Success";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import { getMovie } from "./getMovie";
import { getMovieCredits } from "./getMovieCredits";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectLoading,
  selectMovies,
  selectMoviesSearchTerm,
} from "../MovieList/moviesSlice";
import { selectGenres } from "../../Genres/genresSlice";

const MoviePage = () => {
  const [movieData, setMovieData] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectMoviesSearchTerm);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovies());
    setMovieData("loading");

    const timeoutId = setTimeout(() => {
      getMovie(id)
        .then((movie) => {
          setMovieData(movie);
        })
        .catch(() => {
          setMovieData("error");
        });

      getMovieCredits(id)
        .then((movieCredits) => {
          setMovieCredits(movieCredits);
        })
        .catch(() => {
          setMovieCredits("error");
        });
    }, 500); //to show loading screen;
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, searchTerm]);

  const movies = useSelector(selectMovies);
  const state = useSelector(selectLoading);
  const genres = useSelector(selectGenres);
  const { results } = movies;

  switch (movieData, state) {
    case "error":
      return <Error />;

    case "loading":
      return (
        <Loading
          header={searchTerm ? `Search results for “${searchTerm}”` : null}
        />
      );

    default:
      return (
        <Success
          movieData={movieData}
          movieCredits={movieCredits}
          searchTerm={searchTerm}

          {...(searchTerm && {
            movies: results,
            genreList: genres,
            header: searchTerm
              ? `Search results for "${searchTerm}" (${movies.total_results})`
              : "Popular movies"
          })}
        />
      );
  }
};

export default MoviePage;
