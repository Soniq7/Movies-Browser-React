import { styled, css } from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 208px);
  justify-content: space-between;
  gap: 24px;
  padding: 0;
  margin: 0;
  ${({ shortList }) =>
    shortList &&
    css`
      justify-content: start;
    `}
  @media (max-width: 750px) and (min-width: 550px) {
    justify-content: space-around;
  }
  @media (max-width: 700px) {
    gap: 16px;
  }
  @media (max-width: 520px) {
    justify-content: space-around;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
