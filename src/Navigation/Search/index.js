import { useLocation } from "react-router-dom";
import { Input, LoupeIcon, Wrapper } from "./styled";

const Search = () => {
  const location = useLocation();

  const placeholderText =
    location.pathname === "/movies"
      ? "Search for movies..."
      : location.pathname === "/people"
      ? "Search for people..."
      : "";

  return (
    <Wrapper>
      <LoupeIcon />
      <Input placeholder={placeholderText} />
    </Wrapper>
  );
};

export default Search;
