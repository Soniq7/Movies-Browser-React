import styled from "styled-components";

export const Tiled = styled.div`
  background: ${({ theme }) => theme.colors.boxBackground};
  padding: 16px;
  width: 324px;
  height: 650px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
`;

export const TileImage = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;
`;

export const TileContent = styled.div``;

export const TileHeader = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 8px;
`;

export const TileYear = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.secondaryText};
  padding-left: 0;
  margin-bottom: 8px;
`;

export const TileGenres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: -4px;
  margin-bottom: 39px;
`;

export const TileTags = styled.li`
  font-size: 14px;
  font-weight: 400;
  background: ${({ theme }) => theme.colors.genre.background};
  margin: 4px;
  padding: 8px 16px;
  border-radius: 5px;
`;

export const TileView = styled.div`
  display: flex;
  flex: wrap;
`;

export const TileRating = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding-left: 6px;
`;

export const TileRatingIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const TileVotes = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.secondaryText};
  padding-left: 6px;
`;
