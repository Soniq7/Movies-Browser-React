import styled from "styled-components";
import { Tile, Title } from "../defaultTileStyles";

export const MovieTile = styled(Tile)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 324px;
  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 292px auto;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 114px auto;
  }
`;

export const Poster = styled.img`
  border-radius: 5px;
  height: 434px;
  width: 292px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 169px;
    width: 114px;
  }
`;

export const MovieTitle = styled(Title)`
  height: auto;
  @media (max-width: 700px) {
    font-size: 26px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const Year = styled.p`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 16px;
  font-weight: 400;
  grid-column: 1;
  margin: 0;
  padding-left: 0;
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const Job = styled(Year)``;

export const GenreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-column: 1;
  list-style: none;
  margin: -4px;
  padding-left: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
    margin-bottom: 8px;
  }
`;

export const Description = styled.p`
  display: none;
  font-size: 14px;
  margin: 0;
  @media (max-width: 750px) and (min-width: 602px) {
    display: block;
  }
`;

export const Review = styled.div`
  display: flex;
  gap: 12px;
  grid-column: 1;
  grid-row: 5;
  margin-top: auto;
  @media (max-width: 750px) and (min-width: 600px) {
    white-space: nowrap;
  }
  @media (max-width: 750px) {
    gap: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
  }
`;

export const Rating = styled(Year)`
  color: unset;
  font-weight: 600;
  padding-left: 6px;
`;

export const Votes = styled(Rating)`
  color: ${({ theme }) => theme.colors.text.thirdText};
  font-weight: 400;
`;

export const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
`;
///////////////////////////////////////////////////////// Movie Tile
///////////////////////////////////////////////////////// Person Tile

export const PersonName = styled(Title)`
  text-align: center;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const PersonTile = styled(Tile)`
  justify-content: center;
  width: 208px;
  @media (max-width: 600px) {
    padding: 8px;
    width: 136px;
  }
`;

export const Frame = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 231px;
  margin: 0 0 12px 0;
  overflow: hidden;
  width: 176px;
  @media (max-width: 600px) {
    height: 178px;
    margin: 0 0 8px 0;
    width: 120px;
  }
`;

export const Photo = styled.img`
  height: 264px;
  width: 177px;
  @media (max-width: 600px) {
    height: 178px;
    width: 120px;
  }
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.colors.text.thirdText};
  font-size: 18px;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const PersonContent = styled.span`
  align-content: space-between;
  display: flex;
  flex-direction: column;
`;
