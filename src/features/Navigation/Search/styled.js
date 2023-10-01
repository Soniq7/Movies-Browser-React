import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../images/search.svg";

export const LoupeIcon = styled(SearchIcon)`
  height: 24px;
  margin: 0 0 0 24px;
  position: absolute;
  width: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 16px;
    width: 16px;
  }
`;
export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    grid-column-end: 4;
    grid-column-start: 1;
    grid-row: 2;
  }
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.search.searchBackground};
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.colors.search.searchBorder};
  height: 48px;
  padding-left: 64px;
  width: 432px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 44px;
    width: 288px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    width: 100%;
  }
`;
