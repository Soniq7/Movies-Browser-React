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
      return (
        <Loading
          header={searchTerm ? `Search results for “${searchTerm}”` : null}
        />
      );
    case "success":
      return (
        <Success
          results={results}
          searchTerm={searchTerm}
          header={
            searchTerm
              ? `Search results for "${searchTerm}" (${people.total_results})`
              : "Popular people"
          }
        />
      );
    case "error":
      return <Error />;
    default:
      return null;
  }
};

export default PeopleList;
