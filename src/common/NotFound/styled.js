import { styled } from "styled-components";
import { ReactComponent as NotFoundSvg } from "../../images/notFound.svg";

export const NotFoundImage = styled(NotFoundSvg)`
  height: auto;
  width: 668px;
  @media (max-width: 830px) {
    width: 500px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 340px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.h1`
  align-self: start;
  margin: 56px 0 0;
  @media (max-width: 830px) {
    font-size: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
