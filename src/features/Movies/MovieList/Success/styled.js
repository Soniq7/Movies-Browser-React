import styled from "styled-components";

export const ListItem = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  gap: 24px;
  padding: 0;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontal}) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 1070px) {
    grid-template-columns: repeat(2, auto);
  }
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

export const Header = styled.h1`
  padding: 0 30px;
  font-size: 36px;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
    font-weight: 600;
    padding: 0;
  }
`;

export const Section = styled.section`
  width: auto;
  margin: 56px auto auto;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 24px auto auto;
    width: 288px;
    font-weight: 600;
  }
`;

export const Wrapper = styled.div`
  padding: 0 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
  }
`;
