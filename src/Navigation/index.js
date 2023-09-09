import { toMovies, toPeople } from "../routes";
import { VideoIcon, PageTitle, Logo } from "./Logo/styled";
import { Navigation, NavList, MenueItem, StyledNavLink } from "./Menue/styled";
import { Search } from "./Search/styled";
// import { ReactComponent as VideoIcon} from "../../../public/images/icon.svg";

export default () => {
  return (
    <Navigation>
      <NavList>
        <Logo>
          <VideoIcon src="../../../public/images/icon.svg" />
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
