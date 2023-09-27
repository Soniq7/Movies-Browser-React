import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPeople,
  selectLoading,
  selectPeopleSearchTerm,
} from "./peopleSlice";
import { useEffect } from "react";
import Success from "./Success";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";

const PeopleList = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectPeopleSearchTerm);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch, searchTerm]);

  const people = useSelector(selectPeople);
  const state = useSelector(selectLoading);
  const { results } = people;

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
