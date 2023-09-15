import styled from "styled-components";

export const ListItem = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, auto);
  justify-content: center;
  gap: 24px;
  padding: 0;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontal}) {
    grid-template-columns: repeat(5, auto);
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(4, auto);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 16px;
  }
`;

export const Item = styled.li`
  list-style: none;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;
