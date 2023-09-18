import { styled } from "styled-components";

export const Shadow = styled.img`
  position: absolute;
  height: 770px;
  z-index: 1;
`;

export const BackdropPoster = styled.img`
  max-width: 1368px;
  max-height: 800px;
  width: auto;
  z-index: -2;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: black;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Content = styled.span`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
`;
