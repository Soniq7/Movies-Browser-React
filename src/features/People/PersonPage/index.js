import { useEffect, useState } from "react";
import Success from "./Success";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";
import { getPerson } from "./getPerson";
import { getPersonCredits } from "./getPersonCredits";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { selectGenres } from "../../Genres/genresSlice";
import { selectPeopleSearchTerm } from "../PeopleList/peopleSlice";

const PersonPage = () => {
  const [personData, setPersonData] = useState(null);
  const [personCreditsData, setPersonCreditsData] = useState(null);

  const { id } = useParams();
  const genres = useSelector(selectGenres);
  const history = useHistory();
  const searchTerm = useSelector(selectPeopleSearchTerm);

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
  }, [id]);

  useEffect(() => {
    const handlePeopleSearch = () => {
      if (searchTerm.trim() !== "") {
        history.push("/people");
      }
    };

    const timeoutId = setTimeout(handlePeopleSearch, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm, history]);

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
