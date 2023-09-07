import { toMovies, toPeople } from "../routes";
import { Navigation, NavList, MenueItem, StyledNavLink } from "./styled";

export default () => {
  return (
    <Navigation>
      <NavList>
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
      </NavList>
    </Navigation>
  );
};
