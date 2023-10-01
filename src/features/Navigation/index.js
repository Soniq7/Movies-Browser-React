import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { toMovies, toPeople } from "../../routes";
import {
  VideoIcon,
  PageTitle,
  Logo,
  Navigation,
  NavList,
  MenueItem,
  StyledNavLink,
} from "./styled";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { firstMoviePage } from "../Movies/MovieList/moviesSlice";
import { firstPeoplePage } from "../People/PeopleList/peopleSlice";

export default () => {
  const history = useHistory();
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const handleResetClick = () => {
    history.push("/");
    searchRef.current.resetSearch();
  };

  return (
    <Navigation>
      <NavList>
        <Logo
          to="/"
          onClick={() => {
            dispatch(firstMoviePage());
            dispatch(firstPeoplePage());
            handleResetClick();
          }}
        >
          <VideoIcon />
          <PageTitle>Movies Browser</PageTitle>
        </Logo>
        <MenueItem>
          <StyledNavLink
            to={toMovies()}
            onClick={() => {
              dispatch(firstMoviePage());
              dispatch(firstPeoplePage());
              handleResetClick();
            }}
          >
            Movies
          </StyledNavLink>
        </MenueItem>
        <MenueItem>
          <StyledNavLink
            to={toPeople()}
            onClick={() => {
              dispatch(firstMoviePage());
              dispatch(firstPeoplePage());
              handleResetClick();
            }}
          >
            People
          </StyledNavLink>
        </MenueItem>
        <Search ref={searchRef} />
      </NavList>
    </Navigation>
  );
};
