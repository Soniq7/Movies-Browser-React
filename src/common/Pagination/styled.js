import styled from "styled-components";
import { ReactComponent as PaginationVectorTwo } from "../../common/images/VectorTwo.svg";
import { ReactComponent as PaginationVectorFirst } from "../../common/images/VectorFirst.svg";

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #d6e4ff;
  outline: none;
  gap: 8px;

  &:hover {
    filter: brightness(90%);
  }

  &:disabled {
    background-color: #e4e6f0;
    filter: none;
    cursor: not-allowed;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 12px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  }
`;

export const CurrentPages = styled.div`
  display: flex;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #7e839a;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const VectorFirst = styled(PaginationVectorFirst)`
  display: flex;
  flex-wrap: wrap;
  width: 7px;
  height: 11px;
  fill: #0044cc;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 7px;
    height: 8px;
  }
`;

export const VectorFirstDisabled = styled(PaginationVectorFirst)`
  display: flex;
  flex-wrap: wrap;
  width: 7px;
  height: 11px;
  fill: #7e839a;
  cursor: not-allowed;
  transform: rotate(180deg);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 7px;
    height: 8px;
  }
`;

export const VectorSecond = styled(PaginationVectorTwo)`
  display: flex;
  flex-wrap: wrap;
  width: 7px;
  height: 11px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 7px;
    height: 8px;
  }
`;

export const VectorSecondActive = styled(PaginationVectorTwo)`
  display: flex;
  flex-wrap: wrap;
  width: 7px;
  height: 11px;
  transform: rotate(180deg);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 7px;
    height: 8px;
  }
`;

export const VectorSecondDisabled = styled(PaginationVectorFirst)`
  display: flex;
  flex-wrap: wrap;
  width: 7px;
  height: 11px;
  fill: #7e839a;
  cursor: not-allowed;
  transform: rotate(180deg);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 7px;
    height: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  }
`;
