import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 94px;
  background: ${({ theme }) => theme.colors.navigation.background};
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    height: 142px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  width: 1368px;
  gap: 12px;
  margin: auto;
  padding: 0 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    justify-content: center;
    align-content: center;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    height: 142px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-content: center;
  }
`;

export const MenueItem = styled.li`
  display: inline-flex;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  height: 48px;
  font-size: 14px;
  font-weight: 600;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 12px;
    height: 43px;
    font-size: 12px;
  }
`;
