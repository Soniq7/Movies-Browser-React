import { useLocation } from "react-router-dom";
import { Input, LoupeIcon, Wrapper, IconWrapper } from "./styled";

const Search = () => {
  const location = useLocation();
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
      <Input placeholder={placeholderText} />
    </Wrapper>
  );
};

export default Search;
