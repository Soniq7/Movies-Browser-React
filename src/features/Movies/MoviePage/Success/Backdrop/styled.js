import { styled } from "styled-components";
import { ReactComponent as Star } from "../../../../../images/shape-star.svg";

export const Header = styled.header`
  display: flex;
  background: black;
  width: 100%;
  height: 770px;
  justify-content: center;
  position: relative;
  overflow: hidden;
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
  z-index: 1;
  position: absolute;
  grid-row: 1;
  grid-column: 1;
  height: 100%;
  background-position: center;
  width: 100vw;
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
  position: relative;
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(320px, 1368px);
  grid-template-rows: minmax(148px, 770px);
`;

export const Poster = styled.img`
  position: relative;
  justify-self: center;
  grid-row: 1;
  grid-column: 1;
  height: 100%;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.text.backdropText};
  grid-row: 1;
  grid-column: 1;
  z-index: 2;
  display: grid;
  align-items: end;
  padding: 56px;
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
  width: 40px;
  height: 40px;
`;

export const Title = styled.h1`
  margin: 24px 0;
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
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
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    margin-bottom: 10px;
  }
`;

export const ReviewIcon = styled(Star)`
  width: 40px;
  height: auto;
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
  margin: 0;
  color: ${({ theme }) => theme.colors.text.backdropText};
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
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
