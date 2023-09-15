import { useEffect, useState } from "react";
import Success from "./Success";
import Error from "../../Error";
import { getPerson } from "./getPerson";
import { getPersonCredits } from "./getPersonCredits";
import Loading from "../../Loading";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const PersonPage = () => {
  const [personData, setPersonData] = useState(null);
  const [personCreditsData, setPersonCreditsData] = useState(null);

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
        />
      );
  }
};

export default PersonPage;
