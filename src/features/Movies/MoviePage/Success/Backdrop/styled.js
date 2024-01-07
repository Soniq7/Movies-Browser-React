import { styled } from "styled-components";
import { ReactComponent as Star } from "../../../../../common/images/shape-star.svg";

export const Header = styled.header`
  background: black;
  display: flex;
  height: 770px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  @media (max-width: 1450px) {
    height: 600px;
  }
  @media (max-width: 1230px) {
    height: 500px;
  }
  @media (max-width: 960px) {
    height: 400px;
  }
  @media (max-width: 760px) {
    height: 340px;
  }
  @media (max-width: 600px) {
    height: 270px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 240px;
  }
  @media (max-width: 400px) {
    height: 148px;
  }
`;

export const Shadow = styled.img`
  grid-column: 1;
  grid-row: 1;
  height: 100%;
  position: absolute;
  width: 100vw;
  z-index: 1;
  @media (min-width: 1921px) {
    width: 1920px;
  }
  @media (max-width: 940px) {
    width: 95vw;
  }
  @media (max-width: 850px) {
    width: 100vw;
  }
  @media (max-width: 680px) {
    width: 110vw;
  }
  @media (max-width: 600px) {
    width: 90vw;
  }
  @media (max-width: 480px) {
    width: 100vw;
  }
  @media (max-width: 400px) {
    width: 90vw;
  }
  @media (max-width: 350px) {
    width: 100vw;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 1368px);
  grid-template-rows: minmax(148px, 770px);
  justify-content: center;
  position: relative;
`;

export const Poster = styled.img`
  grid-column: 1;
  grid-row: 1;
  height: 100%;
  justify-self: center;
  position: relative;
`;

export const Content = styled.div`
  align-items: end;
  color: ${({ theme }) => theme.colors.text.backdropText};
  display: grid;
  grid-column: 1;
  grid-row: 1;
  padding: 56px;
  z-index: 2;
  @media (max-width: 1230px) {
    padding: 40px 60px;
  }
  @media (max-width: 750px) {
    padding: 35px;
  }
  @media (max-width: 600px) {
    padding: 25px;
  }
  @media (max-width: 550px) {
    padding: 15px;
  }
  @media (max-width: 400px) {
    padding: 0px 10px;
  }
`;

export const StarImage = styled(Star)`
  height: 40px;
  width: 40px;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  margin: 24px 0;
  @media (max-width: 1230px) {
    font-size: 50px;
  }
  @media (max-width: 960px) {
    font-size: 36px;
    margin: 12px 0;
  }
  @media (max-width: 550px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    margin: 6px 0;
  }
`;
export const Review = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    margin-bottom: 10px;
  }
`;

export const ReviewIcon = styled(Star)`
  height: auto;
  width: 40px;
  @media (max-width: 1230px) {
    width: 30px;
  }
  @media (max-width: 960px) {
    width: 25px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 15px;
  }
`;

export const Score = styled.p`
  color: ${({ theme }) => theme.colors.text.backdropText};
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  @media (max-width: 1230px) {
    font-size: 24px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
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
  @media (max-width: 960px) {
    font-size: 12px;
  }
  @media (max-width: 760px) {
    font-size: 10px;
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
