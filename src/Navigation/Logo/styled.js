import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../images/icon.svg";
import { NavLink } from "react-router-dom";

export const Logo = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  height: 48px;
  gap: 12px;
  margin-right: 68px;
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    margin-right: 0;
    height: 43px;
  }
`;

export const VideoIcon = styled(LogoIcon)`
  width: 40px;
  height: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 17px;
    height: 17px;
  }
`;

export const PageTitle = styled.p`
  color: ${({ theme }) => theme.colors.navigation.text};
  display: flex;
  align-self: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  white-space: nowrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;
