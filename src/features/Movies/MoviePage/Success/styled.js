import styled from "styled-components";

export const Item = styled.li`
  list-style: none;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
  margin: 0;
`;
