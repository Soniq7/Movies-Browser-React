import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../images/icon.svg";
import { NavLink } from "react-router-dom";

export const Logo = styled(NavLink)`
  align-items: center;
  display: inline-flex;
  gap: 12px;
  height: 48px;
  margin-right: 68px;
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    height: 43px;
    margin-right: 0;
  }
`;

export const VideoIcon = styled(LogoIcon)`
  height: 40px;
  width: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 17px;
    width: 17px;
  }
`;

export const PageTitle = styled.p`
  align-self: center;
  color: ${({ theme }) => theme.colors.navigation.text};
  display: flex;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  white-space: nowrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;
