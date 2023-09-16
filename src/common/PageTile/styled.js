import { styled } from "styled-components";

export const Tile = styled.article`
  background: ${({ theme }) => theme.colors.background.boxBackground};
  display: grid;
  grid-template-columns: auto auto;
  gap: 40px;
  padding: 40px;

  box-shadow: ${({ theme }) => theme.boxShadow.tile};

  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    grid-template-columns: 292px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: 400;
    grid-template-columns: 116px auto;
    padding: 16px;
    gap: 16px;
  }
`;

export const Portrait = styled.img`
  width: 399px;
  height: 564px;
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    width: 292px;
    height: 434px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 116px;
    height: 163px;
  }
`;

export const PersonContent = styled.span`
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr;
  grid-gap: 24px;
  padding: 8px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-rows: repeat(2, auto) 1fr;
    grid-gap: 16px;
    padding: 0;
  }
`;

export const MovieContent = styled(PersonContent)`
  grid-template-rows: repeat(6, auto) 1fr;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 8px;
  }
`;

export const Name = styled.p`
  margin: 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  @media (max-width: ${({ theme }) => theme.breakpoints.navigation}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const PersonalInfo = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
`;

export const InfoWrapper = styled.span`
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
    font-size: 14px;
  }
`;

export const Info = styled.dd`
  margin: 0;
  font-size: 18px;
  line-height: 1.2;
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
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RatingScore = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const VoteCount = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const RatingScale = styled(VoteCount)``;

export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  row-gap: 8px;
  list-style: none;
  padding-left: 0;
  flex-shrink: 0;
  margin: -4px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  }
`;
