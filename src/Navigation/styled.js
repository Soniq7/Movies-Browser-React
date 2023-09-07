import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  width: 1920px;
  height: 94px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const NavList = styled.ul`

`;


export const List = styled(NavLink)`

`;