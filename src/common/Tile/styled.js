import styled from "styled-components";

export const StyledTile = styled.article`
  background: ${({ theme }) => theme.colors.boxBackground};
  padding: 16px;
  width: 324px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 16px;
    width: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-height: 201px;
    max-width: 445px;
  }
`;

export const TileImage = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 114px;
    height: 169px;
  }
`;

export const TileHeader = styled.h2`
  margin: 0;
  height: auto;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};
  @media (max-width: 700px) {
    font-size: 26px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const TileYear = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.secondaryText};
  padding-left: 0;
  grid-column: 2;
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const TileGenres = styled.ul`
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: -4px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
    margin-bottom: 8px;
  }
`;

export const TileTags = styled.li`
  font-size: 14px;
  font-weight: 400;
  background: ${({ theme }) => theme.colors.genre.background};
  margin: 4px;
  padding: 8px 16px;
  border-radius: 5px;
  grid-row: 1;
  @media (max-width: 700px) {
    padding: 12px 24px;
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4px 8px;
    font-size: 10px;
    margin: 0;
  }
`;

export const TileReview = styled.div`
  grid-column: 2;
  display: flex;
  gap: 12px;
  margin-top: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
    gap: 8px;
  }
`;

export const TileRating = styled.span`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding-left: 6px;
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const TileRatingIcon = styled.img`
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

export const TileVotes = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.secondaryText};
  padding-left: 6px;
  white-space: nowrap;
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const TileWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 180px;
`;
