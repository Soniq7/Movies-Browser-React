import { styled } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Tile = styled.article`
  background: ${({ theme }) => theme.colors.background.boxBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow.tile};
  height: 100%;
  padding: 16px;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.primaryText};
  text-decoration: none;
`;

export const GenreTag = styled.li`
  background: ${({ theme }) => theme.colors.genre.background};
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  grid-row: 1;
  margin: 4px;
  padding: 8px 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    margin: 0;
    padding: 4px 8px;
  }
`;

export const RatingIcon = styled.img`
  height: 24px;
  width: 24px;
  @media (max-width: 700px) {
    height: 28px;
    width: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 16px;
    width: 16px;
  }
`;
