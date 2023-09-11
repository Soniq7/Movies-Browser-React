import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 94px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.navigation.background};
`;

export const NavList = styled.ul`
  display: inline-flex;
  gap: 10px;
  margin: 23px;
  padding: 0px 40px;
`;

export const MenueItem = styled.li`
   display: inline-flex;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 8px 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.navigation.text};
  text-decoration: none;

  &:hover {
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.navigation.border};
  }

  &.active {
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.navigation.border};
  }
`;
