import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../images/search.svg";

export const LoupeIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  margin: 0 0 0 24px;
  position: absolute;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 16px;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

export const Input = styled.input`
  width: 432px;
  height: 48px;
  border-radius: 33px;
  padding-left: 64px;
  border: 1px solid ${({ theme }) => theme.colors.search.searchBorder};
  background: ${({ theme }) => theme.colors.search.searchBackground};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 44px;
    width: 288px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    width: 100%;
  }
`;
