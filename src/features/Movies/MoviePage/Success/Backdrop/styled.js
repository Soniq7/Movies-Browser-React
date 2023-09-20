import { styled } from "styled-components";
import { ReactComponent as Star } from "../../../../../images/shape-star.svg";

export const Shadow = styled.img`
  position: absolute;
  height: 770px;
  width: 100%;
  z-index: 1;
  @media (max-width: 1450px) {
    height: 650px;
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
    height: 250px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 148px;
  }
`;

export const BackdropPoster = styled(Shadow)`
  position: static;
  z-index: -2;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: black;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 73%;
`;

export const Content = styled.span`
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 56px 0;
  @media (max-width: 760px) {
    padding: 28px;
  }
  @media (max-width: 700px) {
    padding: 28px 14px;
  }
  @media (max-width: 700px) {
    padding: 28px 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 24px 0;
  @media (max-width: 1450px) {
    font-size: 56px;
  }
  @media (max-width: 1230px) {
    font-size: 36px;
  }
  @media (max-width: 760px) {
    font-size: 24px;
    margin: 0 0 12px 0;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 0 4px 0;
    font-size: 14px;
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
  color: white;
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
  @media (max-width: 700px) {
    margin-top: 0;
  }
`;
