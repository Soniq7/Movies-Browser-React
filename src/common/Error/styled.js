import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as DangerIcon } from "./danger.svg";

export const Danger = styled(DangerIcon)`
  height: auto;
  margin: 180px 0 0;
  width: 120px;
  @media (max-width: 960px) {
    margin: 100px 0 0;
    width: 100px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Container = styled.div`
  gap: 24px;
  margin: 24px 0 0;
  text-align: center;
  @media (max-width: 960px) {
    margin: 12px 0 0;
  }
`;

export const ErrorHeader = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  @media (max-width: 960px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

export const Button = styled(NavLink)`
  background: ${({ theme }) => theme.colors.background.button};
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.text.button};
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 700;
  gap: 10px;
  line-height: 19px;
  padding: 16px 24px;
  text-decoration: none;

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }

  @media (max-width: 960px) {
    font-size: 12px;
    padding: 12px 16px;
  }
`;
