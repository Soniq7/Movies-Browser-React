import styled from "styled-components";

export const ListItem = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 0;
  @media (max-width: 700px) {
    gap: 16px;
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
