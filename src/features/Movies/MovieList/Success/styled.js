import { styled, css } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  ${({ shortList }) =>
    shortList &&
    css`
      justify-content: flex-start;
    `}
  @media (max-width: 1100px) {
    justify-content: center;
  }
  @media (max-width: 700px) {
    gap: 16px;
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
