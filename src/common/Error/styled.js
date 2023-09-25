import styled from "styled-components";
import { ReactComponent as DangerIcon } from "./danger.svg";

export const Danger = styled(DangerIcon)`
  margin: 180px 0 0;
  width: 120px;
  height: auto;
  @media (max-width: 960px) {
    margin: 100px 0 0;
    width: 100px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Container = styled.div`
  margin: 24px 0 0;
  gap: 24px;
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

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.background.button};
  padding: 16px 24px;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text.button};
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  @media (max-width: 960px) {
    padding: 12px 16px;
    font-size: 12px;
  }
`;
