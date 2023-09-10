import { toMovies, toPeople } from "../routes";
import { VideoIcon, PageTitle, Logo } from "./Logo/styled";
import { Navigation, NavList, MenueItem, StyledNavLink } from "./Menue/styled";
import Search from "./Search";

export default () => {
  return (
    <Navigation>
      <NavList>
        <Logo>
          <VideoIcon />
          <PageTitle>Movies Browser</PageTitle>
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
        <Search />
      </NavList>
    </Navigation>
  );
};
