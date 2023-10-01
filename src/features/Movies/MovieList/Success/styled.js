import { styled } from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 24px;
  margin: 0;
  padding: 0;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 1070px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 750px) {
    grid-template-columns: auto;
    grid-gap: 16px;
  }
`;

export const Item = styled.li`
  list-style: none;
  margin: 0;
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;
