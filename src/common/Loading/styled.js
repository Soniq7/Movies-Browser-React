import { styled, keyframes } from "styled-components";
import { ReactComponent as LoaderIcon } from "./loader.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const spin = keyframes`
to{
    transform:rotate(360deg);
}
`;

export const Loader = styled(LoaderIcon)`
  width: 100px;
  height: auto;
  margin-top: 200px;
  animation: ${spin} 1s linear infinite;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
    width: 70px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 35px;
  }
`;
