import { useState, useImperativeHandle, forwardRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input, LoupeIcon, Wrapper, IconWrapper } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import {
  selectMoviesSearchTerm,
  updateMoviesSearchTerm,
} from "../../features/Movies/MovieList/moviesSlice";
import {
  selectPeopleSearchTerm,
  updatePeopleSearchTerm,
} from "../../features/People/PeopleList/peopleSlice";

const Search = forwardRef((props, ref) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const moviesSearchTerm = useSelector(selectMoviesSearchTerm);
  const peopleSearchTerm = useSelector(selectPeopleSearchTerm);

  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const [localSearchTerm, setLocalSearchTerm] = useState(query || "");

  useEffect(() => {
    if (location.pathname.startsWith("/movies")) {
      dispatch(updateMoviesSearchTerm(localSearchTerm));
    } else if (location.pathname.startsWith("/people")) {
      dispatch(updatePeopleSearchTerm(localSearchTerm));
    }
  }, [localSearchTerm, location.pathname, dispatch]);

  const onInputChange = (event) => {
    const value = event.target.value;
    setLocalSearchTerm(value);
    replaceQueryParameter({
      key: searchQueryParamName,
      value: value.trim() !== "" ? value : undefined,
    });
  };
  const resetSearch = () => {
    setLocalSearchTerm("");
    replaceQueryParameter({
      key: searchQueryParamName,
      value: "",
    });
  };

  useImperativeHandle(ref, () => ({
    resetSearch,
  }));

  const placeholderText = location.pathname.startsWith("/movies")
    ? "Search for movies..."
    : location.pathname.startsWith("/people")
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
