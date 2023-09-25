import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(324px, 1fr));
  justify-content: center;
  grid-gap: 24px;
  padding: 0;
  margin: 0;
  @media (max-width: 700px) {
    grid-template-columns: auto;
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
