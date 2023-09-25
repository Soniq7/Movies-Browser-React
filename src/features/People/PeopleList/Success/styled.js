import { styled, css } from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, 208px);
  justify-content: space-between;
  margin: 0;
  padding: 0;

  ${({ shortList }) =>
    shortList &&
    css`
      justify-content: start;
    `}

  @media (max-width: 520px) {
    justify-content: space-around;
  }

  @media (max-width: 550px) and (min-width: 700px) {
    justify-content: space-around;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fit, 136px);
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
