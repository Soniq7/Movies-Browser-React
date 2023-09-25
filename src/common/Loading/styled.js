import { styled, keyframes } from "styled-components";
import { ReactComponent as LoaderIcon } from "./loader.svg";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
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
