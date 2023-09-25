import { useEffect, useState } from "react";
import Success from "./Success";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";
import { getPerson } from "./getPerson";
import { getPersonCredits } from "./getPersonCredits";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { selectGenres } from "../../Genres/genresSlice";
import { useSelector } from "react-redux";
const PersonPage = () => {
  const [personData, setPersonData] = useState(null);
  const [personCreditsData, setPersonCreditsData] = useState(null);
  const genres = useSelector(selectGenres);
  const { id } = useParams();

  useEffect(() => {
    setPersonData("loading");

    const timeoutId = setTimeout(() => {
      getPerson(id)
        .then((person) => {
          setPersonData(person);
        })
        .catch(() => {
          setPersonData("error");
        });

      getPersonCredits(id)
        .then((personCredits) => {
          setPersonCreditsData(personCredits);
        })
        .catch(() => {
          setPersonCreditsData("error");
        });
    }, 500); //to show loading screen;

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  switch (personData) {
    case "error":
      return <Error />;

    case "loading":
      return <Loading />;

    default:
      return (
        <Success
          personData={personData}
          personCreditsData={personCreditsData}
          genreList={genres}
        />
      );
  }
};

export default PersonPage;
