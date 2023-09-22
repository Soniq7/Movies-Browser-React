import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));
  justify-content: center;
  gap: 24px;
  padding: 0;
  margin: 0;
  @media (max-width: 700px) {
    gap: 16px;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(auto-fit, 136px);
  }
`;

export const Item = styled.li`
  justify-self: start;
  list-style: none;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;
