import { styled } from "styled-components";

export const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin: 0 0 24px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const StyledSection = styled.section`
  margin: 56px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 24px auto auto;
  }
`;
