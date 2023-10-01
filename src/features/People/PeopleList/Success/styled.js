import { styled } from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(6, auto);
  margin: 0;
  padding: 0;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(5, auto);
  }
  @media (max-width: 1180px) {
    grid-template-columns: repeat(4, auto);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 16px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, auto);
    grid-gap: 16px;
  }
  @media (max-width: 470px) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 16px;
  }
`;

export const Item = styled.li`
  font-size: 12px;
  justify-self: start;
  list-style: none;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;
