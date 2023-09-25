import styled from "styled-components";
import { Tile, Title } from "../defaultTileStyles";

export const MovieTile = styled(Tile)`
  width: 324px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 292px auto;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 445px;
    grid-template-columns: 114px auto;
  }
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 114px;
    height: 169px;
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
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.secondaryText};
  padding-left: 0;
  grid-column: 1;
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const Job = styled(Year)``;

export const GenreList = styled.ul`
  grid-column: 1;
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

export const Description = styled.p`
  margin: 0;
  font-size: 14px;
  display: none;
  @media (max-width: 750px) and (min-width: 650px) {
    display: block;
  }
  @media (max-width: 550px) and (min-width: 420px) {
    display: block;
    font-size: 10px;
  }
`;

export const Review = styled.div`
  grid-column: 1;
  display: flex;
  gap: 12px;
  margin-top: auto;
  grid-row: 5;
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
  font-weight: 600;
  padding-left: 6px;
  color: unset;
`;

export const Votes = styled(Rating)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.thirdText};
`;

export const MovieContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
///////////////////////////////////////////////////////// Movie Tile
///////////////////////////////////////////////////////// Person Tile

export const PersonName = styled(Title)`
  text-align: center;
`;
export const PersonTile = styled(Tile)`
  width: 208px;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 136px;
    padding: 8px;
  }
`;

export const Frame = styled.div`
  overflow: hidden;
  width: 176px;
  height: 231px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0 0 12px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 120px;
    height: 178px;
    margin: 0 0 8px 0;
  }
`;

export const Photo = styled.img`
  width: 177px;
  height: 264px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 120px;
    height: 178px;
  }
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.colors.text.thirdText};
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const PersonContent = styled.span`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
