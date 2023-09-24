import { styled } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Tile = styled.article`
  background: ${({ theme }) => theme.colors.background.boxBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow.tile};
  padding: 16px;
  height: 100%;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 1.2;
  font-size: 22px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primaryText};
`;

export const GenreTag = styled.li`
  font-size: 14px;
  font-weight: 400;
  background: ${({ theme }) => theme.colors.genre.background};
  margin: 4px;
  padding: 8px 16px;
  border-radius: 5px;
  grid-row: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4px 8px;
    font-size: 10px;
    margin: 0;
  }
`;

export const RatingIcon = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 700px) {
    width: 28px;
    height: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 16px;
  }
`;
