import { useLocation } from "react-router-dom";
import { Input, LoupeIcon } from "./styled";

const Search = () => {
  const location = useLocation();

  const placeholderText =
    location.pathname === "/movies"
      ? "Search for movies..."
      : location.pathname === "/people"
      ? "Search for people..."
      : "";

  return (
    <Input 
        leftIcon={<LoupeIcon />} 
        placeholder={placeholderText} 
    />
  );
  
};

export default Search;
