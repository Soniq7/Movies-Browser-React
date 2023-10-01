import { styled, keyframes } from "styled-components";
import { ReactComponent as LoaderIcon } from "./loader.svg";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 56px;
  padding: 0 14%;
`;
export const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  align-self: start;
  @media (max-width: 500px) {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const spin = keyframes`
to{
    transform:rotate(360deg);
}
`;

export const Loader = styled(LoaderIcon)`
  animation: ${spin} 1s linear infinite;
  height: auto;
  margin-top: 200px;
  width: 100px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
    width: 70px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 35px;
  }
`;
