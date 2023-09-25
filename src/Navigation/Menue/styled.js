import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  background: ${({ theme }) => theme.colors.navigation.background};
  display: flex;
  height: 94px;
  justify-content: center;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    height: 142px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
  margin: auto;
  padding: 0 10px;
  width: 1368px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    align-content: center;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    height: 142px;
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-content: center;
  }
`;

export const MenueItem = styled.li`
  display: inline-flex;
`;

export const StyledNavLink = styled(NavLink)`
  align-items: center;
  color: ${({ theme }) => theme.colors.navigation.text};
  display: flex;
  font-size: 14px;
  font-weight: 600;
  height: 48px;
  padding: 8px 24px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.navigation.border};
  }

  &.active {
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.navigation.border};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    height: 43px;
    padding: 8px 12px;
  }
`;
