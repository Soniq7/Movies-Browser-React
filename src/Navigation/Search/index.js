import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Input, LoupeIcon, Wrapper, IconWrapper } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";

const Search = () => {
  const location = useLocation();

  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  

  const [searchTerm, setSearchTerm] = useState(query || "");

  const onInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    replaceQueryParameter({
      key: searchQueryParamName,
      value: value.trim() !== "" ? value : undefined,
    });
  };

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
        value={searchTerm}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default Search;
