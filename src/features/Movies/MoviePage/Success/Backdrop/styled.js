import { styled } from "styled-components";

export const Shadow = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  background: linear-gradient(
      270deg,
      #000 14.11%,
      rgba(0, 0, 0, 0.87) 15.08%,
      rgba(0, 0, 0, 0.72) 16.51%,
      rgba(0, 0, 0, 0.29) 19.99%,
      rgba(0, 0, 0, 0.16) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000 13.6%,
      rgba(0, 0, 0, 0.98) 14.58%,
      rgba(0, 0, 0, 0.97) 15.44%,
      rgba(0, 0, 0, 0.87) 16.3%,
      rgba(0, 0, 0, 0.23) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000 0%,
      rgba(0, 0, 0, 0.69) 4.66%,
      rgba(0, 0, 0, 0.44) 9.34%,
      rgba(0, 0, 0, 0.21) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.11) 63.17%,
      rgba(0, 0, 0, 0.24) 68.85%,
      rgba(0, 0, 0, 0.49) 78.08%,
      rgba(0, 0, 0, 0.74) 85.86%,
      #000 92.87%
    );
`;

export const BackdropPoster = styled.img`
  position: relative;
  max-height: 770px;
  width: auto;
  z-index: -2;
`;

export const Content = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: minmax(300px, 1350px);
  justify-content: center;
  padding: 0 20px;
  width: auto;
  margin: 0 auto;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontal}) {
    grid-template-columns: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 288px;
    padding: 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Header = styled.header`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
