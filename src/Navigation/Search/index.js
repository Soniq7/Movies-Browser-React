import { useState, useImperativeHandle, forwardRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  LoupeIcon,
  Wrapper,
  IconWrapper,
} from "./styled";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import {
  selectSearchTerm,
  updateSearchTerm,
} from "../../features/Movies/MovieList/moviesSlice";

const Search = forwardRef((props, ref) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const [localSearchTerm, setLocalSearchTerm] = useState(query || "");

  const onInputChange = (event) => {
    const value = event.target.value;
    dispatch(updateSearchTerm(value));
    setLocalSearchTerm(value);
    replaceQueryParameter({
      key: searchQueryParamName,
      value: value.trim() !== "" ? value : undefined,
    });
  };

  const resetSearch = () => {
    setLocalSearchTerm("");
    dispatch(updateSearchTerm(""));
    replaceQueryParameter({
      key: searchQueryParamName,
      value: "",
    });
  };

  useImperativeHandle(ref, () => ({
    resetSearch,
  }));

  const placeholderText =
    location.pathname === "/movies"
      ? "Search for movies..."
      : location.pathname === "/people"
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