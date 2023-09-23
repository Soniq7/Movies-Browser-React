import { styled } from "styled-components";
import { ReactComponent as Star } from "../../../../../images/shape-star.svg";

export const Header = styled.header`
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Shadow = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  max-height: 770px;
  margin: 0 auto;
  max-width: 1368px;
`;

export const StarImage = styled(Star)`
  width: 40px;
  height: 40px;
`;

export const Title = styled.div`
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  @media (max-width: 850px) {
    font-size: 50px;
  }
  @media (max-width: 760px) {
    font-size: 36px;
  }
  @media (max-width: 550px) {
    font-size: 24px;
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: 56px;
  margin: 1% 15%;
  color: ${({ theme }) => theme.colors.text.backdropText};
  @media (max-width: 760px) {
    bottom: 40px;
  }
  @media (max-width: 450px) {
    bottom: 20px;
  }
`;
export const Review = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ReviewIcon = styled(Star)`
  width: 40px;
  height: auto;
  @media (max-width: 1230px) {
    width: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 15px;
  }
`;

export const Score = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.backdropText};
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
  @media (max-width: 1230px) {
    font-size: 24px;
  }
  @media (max-width: 760px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Scale = styled(Score)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  @media (max-width: 760px) {
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 8px;
  }
`;

export const Votes = styled(Scale)`
  margin-top: 16px;
  @media (max-width: 800px) {
    margin-top: 10px;
  }
  @media (max-width: 700px) {
    margin-top: 0;
  }
`;
