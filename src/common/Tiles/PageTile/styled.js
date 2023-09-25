import { styled } from "styled-components";
import { Tile, Title } from "../defaultTileStyles";

export const Name = styled(Title)`
  font-size: 36px;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    font-size: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const StyledTile = styled(Tile)`
  display: flex;
  gap: 40px;
  height: auto;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    display: grid;
    grid-template-columns: 292px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: 400;
    grid-gap: 16px;
    grid-template-columns: 116px auto;
    padding: 16px;
  }
`;

export const Image = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 564px;
  width: 389px;

  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    height: 434px;
    width: 292px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 163px;
    width: 116px;
  }
`;

export const PersonContent = styled.span`
  display: grid;
  flex-grow: 1;
  grid-gap: 24px;
  grid-template-rows: repeat(3, auto) 1fr;
  padding: 8px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 16px;
    grid-template-rows: repeat(2, auto) 1fr;
    padding: 0;
  }
`;

export const MovieContent = styled(PersonContent)`
  grid-template-rows: repeat(6, auto) 1fr;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 8px;
  }
`;

export const InfoList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
`;

export const InfoListWrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

export const Term = styled.dt`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  font-size: 18px;
  line-height: 1.2;
  white-space: nowrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Info = styled.dd`
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const MobileDescription = styled(Description)`
  grid-column: span 2;
`;

export const Year = styled.p`
  font-size: 22px;
  line-height: 1.2;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const Rating = styled.span`
  align-items: center;
  display: flex;
  gap: 8px;
`;

export const Score = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const Votes = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const RatingScale = styled(Votes)``;

export const GenreList = styled.ul`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
  margin: -4px;
  padding-left: 0;
  row-gap: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  }
`;
