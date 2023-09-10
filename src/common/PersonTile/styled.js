import { styled } from "styled-components";

export const Tile = styled.article`
  width: 208px;
  height: 339px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.boxBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow.tile};
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
    width: 136px;
    height: 245px;
    padding: 8px 8px 33px 8px;
  }
`;

export const Frame = styled.div`
  overflow: hidden;
  width: 176px;
  height: 231px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0 0 12px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
    width: 120px;
    height: 178px;
    margin: 0 0 8px 0;
  }
`;

export const Photo = styled.img`
  width: 177px;
  height: 264px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
    width: 120px;
    height: 178px;
  }
`;

export const Name = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
    font-size: 14px;
  }
`;
