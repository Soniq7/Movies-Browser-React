import { useEffect, useState } from "react";
import Success from "./Success";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import { getMovie } from "./getMovie";
import { getMovieCredits } from "./getMovieCredits";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const MoviePage = () => {
  const [movieData, setMovieData] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

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
  }, []);
  console.log(movieCredits);

  switch (movieData) {
    case "error":
      return <Error />;

    case "loading":
      return <Loading />;

    default:
      return <Success movieData={movieData} movieCredits={movieCredits} />;
  }
};

export default MoviePage;
