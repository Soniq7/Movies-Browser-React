import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectPeople, selectLoading } from "./peopleSlice";
import { useEffect } from "react";
import Success from "./Success";
import Loading from "../../Loading";
import Error from "../../Error";

const PeopleList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  }, []);
  const people = useSelector(selectPeople);
  const { results } = people;
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

export default PeopleList;
