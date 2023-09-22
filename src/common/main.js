import { styled } from "styled-components";

export const PageMain = styled.main`
  display: grid;
  grid-template-columns: minmax(300px, 1350px);
  justify-content: center;
  padding: 0 20px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontal}) {
    grid-template-columns: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;
export const ListMain = styled.main`
  justify-content: center;
  padding: 0 20px;
  width: auto;
  margin: 0 auto;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontal}) {
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 288px;
    padding: 0;
  }
`;