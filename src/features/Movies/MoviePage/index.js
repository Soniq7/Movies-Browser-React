import { useEffect, useState } from "react";
import Success from "./Success";
import Error from "../../Error";
import { getMovie } from "./getMovie";
import Loading from "../../Loading";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const MoviePage = () => {
  const [movieData, setMovieData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setMovieData("loading");

    const timeoutId = setTimeout(() => {
      getMovie(id)
        .then((movie) => {
          setMovieData(movie);
        })
        .catch(() => {
          setMovieData("error");
        });
    }, 500); //to show loading screen;

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  switch (movieData) {
    case "error":
      return <Error />;

    case "loading":
      return <Loading />;

    default:
      return <Success movieData={movieData} />;
  }
};

export default MoviePage;
