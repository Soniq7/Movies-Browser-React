import { styled } from "styled-components";

export const PageMain = styled.main`
  display: grid;
  grid-template-columns: minmax(300px, 1350px);
  justify-content: center;
  padding: 0 20px 330px 0;
  margin: 0 auto;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontal}) {
    grid-template-columns: auto;
    padding: 0 20px 210px 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px 10px 80px 10px;
  }
`;
export const ListMain = styled.main`
  justify-content: center;
  padding: 0 40px;
  width: auto;
  margin: 0 auto;
  align-items: center;
`;
