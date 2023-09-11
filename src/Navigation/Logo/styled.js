import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../images/icon.svg";

export const Logo = styled.span`
  display: inline-flex;
  align-items: center;
  height: 48px;
  gap: 12px;
  margin-right: 68px;
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    margin-right: 0;
    height: 43px;
  }
`;

export const VideoIcon = styled(LogoIcon)`
  width: 40px;
  height: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
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
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
    font-size: 16px;
  }
`;
