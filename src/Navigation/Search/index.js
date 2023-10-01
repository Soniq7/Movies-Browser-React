import { useState, useImperativeHandle, forwardRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input, LoupeIcon, Wrapper, IconWrapper } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import {
  firstMoviePage,
  updateMoviesSearchTerm,
} from "../../features/Movies/MovieList/moviesSlice";
import {
  firstPeoplePage,
  updatePeopleSearchTerm,
} from "../../features/People/PeopleList/peopleSlice";

const Search = forwardRef((props, ref) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const [localSearchTerm, setLocalSearchTerm] = useState(query || "");

  const onInputChange = (event) => {
    const value = event.target.value;
    dispatch(updateMoviesSearchTerm(value));
    dispatch(updatePeopleSearchTerm(value));
    dispatch(firstMoviePage());
    dispatch(firstPeoplePage());
    setLocalSearchTerm(value);
    replaceQueryParameter({
      key: searchQueryParamName,
      value: value.trim() !== "" ? value : undefined,
    });
  };

  const resetSearch = () => {
    setLocalSearchTerm("");
    dispatch(updateMoviesSearchTerm(""));
    dispatch(updatePeopleSearchTerm(""));
    replaceQueryParameter({
      key: searchQueryParamName,
      value: "",
    });
  };

  useImperativeHandle(ref, () => ({
    resetSearch,
  }));

  const pathname = location.pathname;

  const placeholderText = pathname.startsWith("/movies")
    ? "Search for movies..."
    : pathname.startsWith("/people")
    ? "Search for people..."
    : "";

  return (
    <Wrapper>
      <IconWrapper>
        <LoupeIcon />
      </IconWrapper>
      <Input
        placeholder={placeholderText}
        value={localSearchTerm}
        onChange={onInputChange}
      />
    </Wrapper>
  );
});

export default Search;
