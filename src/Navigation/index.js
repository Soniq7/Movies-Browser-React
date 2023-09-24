import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { toMovies, toPeople } from "../routes";
import { VideoIcon, PageTitle, Logo } from "./Logo/styled";
import { Navigation, NavList, MenueItem, StyledNavLink } from "./Menue/styled";
import Search from "./Search";



export default () => {
  const history = useHistory();
  const searchRef = useRef(null);

  const handleLogoClick = () => {
    history.push("/");
    searchRef.current.resetSearch();
  };

  return (
    <Navigation>
      <NavList>
        <Logo to="/" onClick={handleLogoClick}>
          <VideoIcon />
          <PageTitle>
            Movies Browser
          </PageTitle>
        </Logo>
        <MenueItem>
          <StyledNavLink to={toMovies()}>
            Movies
          </StyledNavLink>
        </MenueItem>
        <MenueItem>
          <StyledNavLink to={toPeople()}>
            People
          </StyledNavLink>
        </MenueItem>
        <Search ref={searchRef}/>
      </NavList>
    </Navigation>
  );
};
