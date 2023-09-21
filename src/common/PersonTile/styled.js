import { styled } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Tile = styled.article`
  width: 208px;
  height: 100%;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.boxBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow.tile};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 136px;
    padding: 8px;
  }
`;

export const Frame = styled.div`
  overflow: hidden;
  width: 176px;
  height: 231px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0 0 12px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 120px;
    height: 178px;
    margin: 0 0 8px 0;
  }
`;

export const Photo = styled.img`
  width: 177px;
  height: 264px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 120px;
    height: 178px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primaryText};
`;

export const Name = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Job = styled.p`
  color: ${({ theme }) => theme.colors.text.thirdText};
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Content = styled.span`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
