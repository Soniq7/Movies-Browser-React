import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  height: 94px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.navigation.background};
`;

export const NavList = styled.ul`
  display: inline-flex;
  gap: 10px;
  margin: 23px;
`;

export const MenueItem = styled.li`
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 8px 24px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.navigation.border};
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.navigation.text};
  text-decoration: none;
`;
