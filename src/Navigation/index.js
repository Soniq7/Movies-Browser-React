import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { toMovies, toPeople } from "../routes";
import { VideoIcon, PageTitle, Logo } from "./Logo/styled";
import { Navigation, NavList, MenueItem, StyledNavLink } from "./Menue/styled";
import Search from "./Search";

export default () => {
  const history = useHistory();
  const searchRef = useRef(null);

  const handleResetClick = () => {
    history.push("/");
    searchRef.current.resetSearch();
  };

  return (
    <Navigation>
      <NavList>
        <Logo 
          to="/" 
          onClick={handleResetClick}
        >
          <VideoIcon />
          <PageTitle>
            Movies Browser
          </PageTitle>
        </Logo>
        <MenueItem>
          <StyledNavLink 
            to={toMovies()} 
            onClick={handleResetClick}
          >
            Movies
          </StyledNavLink>
        </MenueItem>
        <MenueItem>
          <StyledNavLink 
            to={toPeople()} 
            onClick={handleResetClick}
          >
            People
          </StyledNavLink>
        </MenueItem>
        <Search 
          ref={searchRef}
        />
      </NavList>
    </Navigation>
  );
};
